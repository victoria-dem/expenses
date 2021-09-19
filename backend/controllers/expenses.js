const ExpenseInfo = require('../models/expense');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');

const getExpenses = (req, res, next) => {
  ExpenseInfo.find({})
    .then((expenses) => res.send({ expenses }))
    .catch((e) => {
      next(e);
    });
};

const createExpense = async (req, res, next) => {
  const { description, amount, taxes } = req.body;
  try {
    const expense = await ExpenseInfo.create({
      description,
      amount,
      taxes,
    }).catch((err) => {
      if (err.name === 'ValidationError')
        throw new BadRequestError('Validation error');
      throw new BadRequestError('Request error');
    });
    res.send({ data: expense });
  } catch (e) {
    next(e);
  }
};

const deleteExpense = (req, res, next) => {
  const { expenseId } = req.params;
  return ExpenseInfo.findById(expenseId)
    .then((expense) => {
      if (!expense) {
        throw new NotFoundError('There is no price with this ID.');
      }
      return ExpenseInfo.findByIdAndRemove(expense._id).then((delExpense) => {
        res.send({ data: delExpense });
      });
    })
    .catch((e) => {
      next(e);
    });
};

const updateExpense = async (req, res, next) => {
  const { description, amount, taxes, date } = req.body;
  const { expenseId } = req.params;
  try {
    const expense = await ExpenseInfo.findByIdAndUpdate(
      expenseId,
      { description, amount, taxes, date },
      { new: true }
    ).catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Validation error');
      }
      throw new BadRequestError('Request error');
    });
    res.send({ data: expense });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
};
