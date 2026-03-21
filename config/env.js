require('dotenv').config();

module.exports = {
  BASE_URL: process.env.BASE_URL,
  BROWSER: process.env.BROWSER,
  HEADLESS: process.env.HEADLESS === 'true'
};