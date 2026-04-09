module.exports = {
  default: {
    require: [
      "features/step-definitions/*.js",
      "features/hooks/*.js"
    ],
    format: [
      "progress",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "allure-results"
    }
  }
};