/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();
const { orderController } = require('../../controllers');
const questionValidation = require('../../validations/order.validation');
const validate = require('../../middlewares/validate');


router
  .route('/')
  .post(validate(questionValidation.createQuestion), orderController.createQuestion)
  .get(orderController.getQuestions);

router
  .route('/savedquestions/:id')
  .get(orderController.getSavedQuestions);

router
  .route('/:id')
  .patch(orderController.updateQuestion);

module.exports = router;
