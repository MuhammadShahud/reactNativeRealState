const httpStatus = require('http-status');
const { userService, questionService, cardService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  // const mail =await mailService.
  res.status(httpStatus.CREATED).send(user);
});

// const deleteUser = catchAsync(async (req, res) => {
//   const user = await userService.deleteUserById(req.params.id);
//   res.status(200).send(user);
// });

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.status(200).send(user);
  //res.status(200).json("chal puttar tu chutti kar");
});

const getStatistics = catchAsync(async (req, res) => {
  const obj = {};
  const correctAnswers = await questionService.correctAnswers(req.params.id);
  obj.answer = correctAnswers
  obj.testComplete = {
    totalTests:10,
    correct:6
  }
  
  obj.practiceScore = {
    allQuestions: Math.round((correctAnswers.correct * 100) / correctAnswers.totalAnswers),
    allTests: Math.round((obj.testComplete.correct * 100) / obj.testComplete.totalTests)
  }
  
  obj.flashCardScore = await cardService.flashCardStatistics(req.params.id);
  
  obj.vocabularyScore = await cardService.vocabularyStatistics(req.params.id);
  obj.weeklyActivities =  await questionService.weeklyActivities(req.params.id)
  res.status(200).send(obj);
});

module.exports = {
  createUser,
  // deleteUser,
  getUserById,
  getStatistics,
  // getAllUser,
  // updateUserById,
};
