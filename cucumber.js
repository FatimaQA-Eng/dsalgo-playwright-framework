module.exports = {
  default: {
    require: [
       './features/hooks/hooks.js',
      './features/step-definitions/login.steps.js',
      './features/step-definitions/Tree.steps.js',
      './features/step-definitions/Queue.steps.js',
      './features/step-definitions/LinkedList.steps.js'
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
     paths: [
      "features/*.feature"
    ]
     ,timeout: 60000
  }
};