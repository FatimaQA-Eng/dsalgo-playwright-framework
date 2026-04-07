const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Test Run Info',
    data: [
      { label: 'Project', value: 'DS Algo Playwright BDD' },
      { label: 'Release', value: '1.0' },
      { label: 'Execution Date', value: new Date().toLocaleString() }
    ]
  }
});