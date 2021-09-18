const { isCelebrateError } = require('celebrate');
// const errorMessage = require('../errors/err-message');

const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  if (isCelebrateError(err)) {
    const detailsKey = err.details.keys();
    const errorBody = err.details.get(detailsKey.next().value);
    const errorDetails = `Validation error:  ${errorBody.details[0].message}`;
    res.status(400).send({ message: errorDetails });
  } else {
    res
      .status(statusCode)
      .send({
        message: statusCode === 500
          ? "Server error"
          : message,
      });
  }
  next();
};

module.exports = errorHandler;
