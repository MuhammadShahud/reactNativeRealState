/* eslint-disable prettier/prettier */
const { Card } = require("../models")
const ApiError = require('../utils/APIError');
const httpStatus = require('http-status');
var mongoose = require('mongoose');

const createCard = async (body) => {
  const order = await Card.create(body);
  return order;
}
const getCard = async () => {
  return Card.find();
};
const queryCards = async (
  filter,
  options,
) => {
  const products = Card.paginate(
    filter,
    options,
  );
  return products;
};

const getCardById = async id => {
  return Card.findById(id);
};

const getCardByLimit = async ({ start, end, category }) => {
  const diff = parseInt(end) - parseInt(start)
  const response = await Card.find({ category, premium: false }).skip(parseInt(start)).limit(diff)
  return response;
};

const flashCardStatistics = async (id) => {
  let sets = [];
  const allCards = await Card.find(
    {
      category: 'Card'
    }
  )

  const attemptedFlashCards = await Card.find(
    {
      category: 'Card',
      'visitors': {
        $in: [
          mongoose.Types.ObjectId(id),
        ]
      }
    }
  )
  for (var a = 0; a <= Math.ceil(allCards.length / 50); a++) {
    const setAttemptedFlashcards = await Card.find(
      {
        category: 'Card',
        'visitors': {
          $in: [
            mongoose.Types.ObjectId(id),
          ]
        }
      }
    ).skip(parseInt(a * 50)).limit((a + 1) * 50);
    
    const set = {
      percentage: (setAttemptedFlashcards.length * 100) / 50
    }

    sets = [
      ...sets,
      set
    ]
  }
  return  {
    allFlashCard: Math.round((attemptedFlashCards.length * 100) / allCards.length),
    sets: sets
  }
};

const vocabularyStatistics = async (id) => {
  let sets = [];
  const allCards = await Card.find(
    {
      category: 'Vocabulary'
    }
  )

  const attemptedFlashCards = await Card.find(
    {
      category: 'Vocabulary',
      'visitors': {
        $in: [
          mongoose.Types.ObjectId(id),
        ]
      }
    }
  )
  for (var a = 0; a <= Math.ceil(allCards.length / 50); a++) {
    const setAttemptedFlashcards = await Card.find(
      {
        category: 'Vocabulary',
        'visitors': {
          $in: [
            mongoose.Types.ObjectId(id),
          ]
        }
      }
    ).skip(parseInt(a * 25)).limit((a + 1) * 25);
    
    const set = {
      percentage: (setAttemptedFlashcards.length * 100) / 50
    }

    sets = [
      ...sets,
      set
    ]
  }
  return  {
    allVocabulary: Math.round((attemptedFlashCards.length * 100) / allCards.length),
    sets: sets
  }
};

const updateCardById = async (id, update) => {
  const product = await getCardById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found.');
  }
  Object.assign(product, update);
  await product.save();
  return product;
};

module.exports = {
  createCard, getCard,
  queryCards,
  updateCardById,
  getCardByLimit,
  flashCardStatistics,
  vocabularyStatistics,
};