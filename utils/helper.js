//const report = require('multiple-cucumber-html-reporter');

/*report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  metadata: {
    browser: 'chromium',
    device: 'Local machine',
    platform: 'Windows 10'
  }
});*/

const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html-report',
  openReportInBrowser: true,

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
  }
});