module.exports = {
  default: {
    require: [
      './features/step-definitions/login.steps.js',
      './features/hooks/hooks.js'
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
    timeout: 60000
  }
};