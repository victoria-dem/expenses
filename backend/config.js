// require('dotenv').config();
//
// const { JWT_SECRET = 'dev-secret' } = process.env;

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const MONGO_URL_LOC = 'mongodb://localhost:27017/moviesdb';
const PORT_LOC = 3001;

module.exports = {
  limiter, MONGO_URL_LOC, PORT_LOC, JWT_SECRET,
};
