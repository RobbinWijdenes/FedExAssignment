
// // Import Cucumber prefix
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// // // Import additional layer for reusing command
// // import Common from '../Common';

Given("the user is on the star wars search website", () => {
  cy.visit("http://localhost:4200");
});

When("the user searches for a planet", () => {
  cy.get('#planets')
    .click()
  cy.get('#query')
    .type('Coruscant')
  cy.get('[type="submit"]')
    .click()
});

Then("the user should see the planet properties population, climate and gravity", () => {
  cy.contains('Coruscant')
  .parent('div').should('have.class', 'card-body')
  .within(() => {
    cy.get('.row').eq(0).contains('1000000000000')
    cy.get('.row').eq(1).contains('temperate')
    cy.get('.row').eq(2).contains('1 standard')
  })
});

When("the user searches for an invalid planet", () => {
    cy.get('#planets')
      .click()
    cy.get('#query')
      .type('Earth')
    cy.get('[type="submit"]')
      .click()
  });

  Then("the user should see a validation message of planet not being found", () => {
    cy.contains('Not found.')
  });