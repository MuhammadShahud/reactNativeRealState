/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const {toJSON, paginate} = require('./plugins');
const productSchema = mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    visitors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    category: {
      type: String,
      required: true,
    },
    premium: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },

);
// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);
const Product = mongoose.model('card', productSchema);
module.exports = Product;
