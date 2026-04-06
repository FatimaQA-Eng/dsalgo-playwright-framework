module.exports = {
  default: {
    require: [
      './features/step-definitions/*.js',
      './features/hooks/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    timeout: 60000
  }
};