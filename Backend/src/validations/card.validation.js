/* eslint-disable prettier/prettier */
const Joi = require('joi');

const createCard = {
  body: Joi.object().keys({
    desc: Joi.string().required(),
    category: Joi.string().required(),
    premium: Joi.string().required(),
  }),
};

module.exports = {createCard};
