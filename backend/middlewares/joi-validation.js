const { celebrate, Joi } = require('celebrate');

const validatorExpense = celebrate({
  body: Joi.object().keys({
    description: Joi.string().required().min(2).max(30),
    amount: Joi.number().required().min(0),
  }),
});

module.exports = { validatorExpense };
