/* eslint-disable prettier/prettier */
const { Question} = require('../models');
const ApiError = require('../utils/APIError');
const httpStatus = require('http-status');
var mongoose = require('mongoose');

const createQuestion = async(body) => {
  const order = await Question.create(body);
  return order;
};

const correctAnswers = async(id) => {
  const attempAnswers = await Question.find(
    {
      'attempt':{
        $in: [
          mongoose.Types.ObjectId(id)
        ]
      }
    }
  );
  const correctAnswers = await Question.find(
    {
      'passed':{
        $in: [
          mongoose.Types.ObjectId(id)
        ]
      }
    }
  );
  return {
    totalAnswers: attempAnswers.length,
    correct: correctAnswers.length
  };
};

const weeklyActivities = async(id) => {
  const After24Hours = () => {
    const myCurrentDate = new Date();
    const myPastDate = new Date(myCurrentDate);
    return myPastDate.setDate(myPastDate.getDate() - 1);
  }
  const After7Days = () => {
    const myCurrentDate = new Date();
    const myPastDate = new Date(myCurrentDate);
    return myPastDate.setDate(myPastDate.getDate() - 7);
  }

  const dataWithin24Hours = await Question.find(
    {
      'updatedAt': {
        $gt: After24Hours()
      }
    }
  )
  const dataWithin7Days = await Question.find(
    {
      'updatedAt': {
        $gt: After7Days()
      }
    }
  )

  return {
    answeredToday: dataWithin24Hours.length,
    answeredWeekly: dataWithin7Days.length,
    studyTime:15
  }

};

const queryQuestions = async (
  filter,
  options,
) => {
  const products = Question.paginate(
    filter,
    options,
  );
  return products;
};

const getQuestionById = async id => {
  return Question.findById(id);
};

const getSavedQuestions = async id => {
  const response = await Question.find(
    {
      'favorites': {
        $in: [
          mongoose.Types.ObjectId(id),
        ]
      }
    }
  )
  return response
}

const updateQuestionById = async (id, update) => {
  const product = await getQuestionById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found.');
  }
  Object.assign(product, update);
  await product.save();
  return product;
};

module.exports = { 
  createQuestion, 
  queryQuestions, 
  updateQuestionById,
  getSavedQuestions,
  correctAnswers,
  weeklyActivities,
};
