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
routerExpenses.delete('/:expenseId', deleteExpense);
routerExpenses.put('/:expenseId', validatorExpense, updateExpense);

module.exports = routerExpenses;
