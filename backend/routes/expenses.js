const routerExpenses = require("express").Router();
const {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
  getExpenseById,
} = require("../controllers/Expenses");
const { validatorExpense } = require("../middlewares/joi-validation");

routerExpenses.get("/", getExpenses);
routerExpenses.post("/", validatorExpense, createExpense);
routerExpenses.delete("/:expenseId", deleteExpense);
routerExpenses.put("/:expenseId", validatorExpense, updateExpense);
routerExpenses.get("/:expenseId", getExpenseById);

module.exports = routerExpenses;
