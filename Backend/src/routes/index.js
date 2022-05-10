/* eslint-disable prettier/prettier */
const express = require('express');
const userRoute = require('./user/user.route');
const authRoute = require('./auth/auth.route');
const questionRoute = require('./question/question.route');
const mailRoute = require('./mail/mail.route');
const paymentRoute = require('./payment/payment.route');
const cardRoute = require('./Card/card.route');
const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/mail',mailRoute);
router.use('/question',questionRoute);
router.use('/payment',paymentRoute);
router.use('/card',cardRoute),

module.exports = router;
