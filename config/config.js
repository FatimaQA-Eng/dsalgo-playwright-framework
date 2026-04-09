const env = require('./env');

module.exports = {
  baseURL: env.BASE_URL,
  browser: env.BROWSER,
  headless: env.HEADLESS,
  timeout: 80000

  
};