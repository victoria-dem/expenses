const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  amount: {
    type: Number,
    min: 0,
    required: true,
  },
  taxes: {
    type: Number,
    min: 0,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('expenses', expenseSchema);
