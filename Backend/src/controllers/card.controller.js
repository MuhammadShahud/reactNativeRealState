/* eslint-disable prettier/prettier */
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const {cardService} = require('../services');
const pick = require('../utils/pick');

const createCard = catchAsync(async (req, res) => {
  const response = await cardService.createCard(req.body);
  console.log('response --> ', response);
  res.status(httpStatus.CREATED).send(response);
});
// const getCards = catchAsync(async (req, res) => {
//   const result = await cardService.getCard();
//   res.send(result);
// });

const getCards = catchAsync(async (req, res) => {
  //const userFilters = pick(req.user, ["location_id", "customer_id"]);
  const filters = pick(req.query, ['subject','category', 'premium']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  //let filter = Object.assign(queryFilters, userFilters);
  const result = await cardService.queryCards(
    filters,
    options,
  );
  res.send(result);
});
 
const getCardByLimit = catchAsync(async (req, res) => {
  const result = await cardService.getCardByLimit(req.query);
  res.send(result);
}); 
  
const updateCard = catchAsync(async (req, res) => {
  console.log(req.params.id, req.body);
  const result = await cardService.updateCardById(req.params.id, req.body);
  res.send(result);
});

module.exports = { 
  createCard, 
  getCards, 
  updateCard, 
  getCardByLimit
};
