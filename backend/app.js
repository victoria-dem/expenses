const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerExpenses = require('./routes/expenses');
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
app.use('/expenses', routerExpenses);
app.use('*', (req, res, next) => {
  next(new NotFoundError('The requested resource is not found.'));
});

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  // setInterval(() => {
  //   console.log('server');
  // }, 5000);
});
