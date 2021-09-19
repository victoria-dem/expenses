const routerExpenses = require('express').Router();
const {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
} = require('../controllers/Expenses');
const { validatorExpense } = require('../middlewares/joi-validation');

routerExpenses.get('/', getExpenses);
routerExpenses.post('/', validatorExpense, createExpense);
routerExpenses.delete('/:ExpenseId', deleteExpense);
routerExpenses.put('/:ExpenseId', validatorExpense, updateExpense);

module.exports = routerExpenses;
