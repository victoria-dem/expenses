const PriceInfo = require('../models/price');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');

const getPrices = (req, res, next) => {
  PriceInfo.find({})
    .then((prices) => res.send({ prices }))
    .catch((e) => {
      next(e);
    });
};

const createPrice = async (req, res, next) => {
  const { description, amount, taxes } = req.body;
  try {
    const price = await PriceInfo.create({ description, amount, taxes })
      .catch((err) => {
        if (err.name === 'ValidationError') throw new BadRequestError('Validation error');
        throw new BadRequestError('Request error');
      });
    res.send({ data: price });
  } catch (e) {
    next(e);
  }
};

const deletePrice = (req, res, next) => {
  const { priceId } = req.params;
  return PriceInfo.findById(priceId)
    .then((price) => {
      if (!price) {
        throw new NotFoundError('There is no price with this ID.');
      }
        return PriceInfo.findByIdAndRemove(price._id)
          .then((delPrice) => {
            res.send({ data: delPrice });
          });
    })
    .catch((e) => {
      next(e);
    });
};

const updatePrice = async (req, res, next) => {
  const { description, amount, taxes, date } = req.body;
  const { priceId } = req.params;
  try {
    const price = await PriceInfo.findByIdAndUpdate(priceId, {  description, amount, taxes, date },
      {new: true})
      .catch((err) => {
        if (err.name === 'ValidationError') {
          throw new BadRequestError('Validation error');
        }
        throw new BadRequestError('Request error');
      });
    res.send({ data: price });
  } catch (e) {
    next(e);
  }
};


module.exports = {
  getPrices,
  createPrice,
  deletePrice,
  updatePrice
};

