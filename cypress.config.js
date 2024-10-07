const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 800,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',  // Verifique se o diretório está correto
    overwrite: false,              // Não sobrescreve relatórios antigos
    html: true,                    // Gera o relatório em HTML
    json: true,                     // Gera o relatório em JSON
  }
});
 