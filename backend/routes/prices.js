const routerPrices = require('express').Router();
const {
  getPrices, createPrice, deletePrice, updatePrice
} = require('../controllers/prices');
const { validatorPrice } = require('../middlewares/joi-validation');

routerPrices.get('/', getPrices);
routerPrices.post('/', validatorPrice, createPrice);
routerPrices.delete('/:priceId', deletePrice);
routerPrices.put('/:priceId', validatorPrice, updatePrice);

module.exports = routerPrices;
