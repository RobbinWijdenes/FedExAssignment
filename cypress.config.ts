import { defineConfig } from "cypress";

import * as browserify from "@cypress/browserify-preprocessor";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";


export default defineConfig({
  e2e: {
    specPattern: ["cypress/e2e/features/**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        preprocessor(config, {
          ...browserify.defaultOptions,
          typescript: require.resolve('typescript'),
        })
      );

      
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});

