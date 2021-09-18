const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerPrices = require('./routes/prices');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const NotFoundError = require('./errors/not-found-err');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/dynamicly');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
// app.post('/signup', checkPassword, validatorUser, createUser);
// app.post('/signin', checkPassword, validatorUser, login);
app.use('/prices', routerPrices);
// app.use('/cards', routerCards);
app.use('*', ((req, res, next) => {
  next(new NotFoundError('The requested resource is not found.'));
}));

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  setInterval(() => {
    console.log('server');
  }, 5000);
});
