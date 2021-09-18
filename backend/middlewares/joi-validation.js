const { celebrate, Joi } = require('celebrate');

const validatorPrice = celebrate({
  body: Joi.object().keys({
    description: Joi.string().required().min(2).max(30),
    price: Joi.number().required().min(0),
    taxes: Joi.number().required().min(0),
    date: Joi.date(),
  }),
});

module.exports = {validatorPrice};
