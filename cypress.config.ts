const { defineConfig } = require('cypress');

module.exports = defineConfig({

  projectId: "w2j9bj",
  chromeWebSecurity: false,

  env: {

    elementTimeout: 5000,

    spxURL: 'https://spx.smaato.com/publisherportal/',
    loginEmail: 'pollux-dev+support@smaato.com',
    loginPassword: 'Password123!'
  },

  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  defaultCommandTimeout: 30000,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    code: true,
    reportPageTitle: "Cypress Test Execution Report",
    reportFilename: "[status]_[datetime]-[name]-report",
    overwrite: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true
  },
  
});