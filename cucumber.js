module.exports = {
  default: {
    require: [
      './features/step-definitions/*.js',
      './features/hooks/*.js'
    ],
    format: ['progress'],
    timeout: 60000
  }
};