require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const config = {
  PORT: process.env.PORT,
  BORED_API_URL: process.env.BORED_API_URL,
};

module.exports = config;
