const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://only.digital/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})