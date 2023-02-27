
// // Import Cucumber prefix
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// // // Import additional layer for reusing command
// // import Common from '../Common';


Given("the user is on the star wars search website", () => {
  cy.visit("http://localhost:4200")
  cy.get("#title")
    .should('have.text', 'The Star Wars Search')
});

When("the user searches for a character", () => {
  cy.get('#query')
    .type('Darth Maul')
  cy.get('[type="submit"]')
    .click()
});

Then("the user should see the character properties gender, birth year, eye color and skin color", () => {
  cy.get("#characterName")
  .contains('Darth Maul')
  .parent('div').should('have.class', 'card-body')
  .within(() => {
    cy.get('#gender').contains('male')
    cy.get('#birthYear').contains('54BBY')
    cy.get('#eyeColor').contains('yellow')
    cy.get('#skinColor').contains('red')
  })
});

When("the user searches for an invalid character", () => {
  cy.get('#query')
    .type('Robbin')
  cy.get('[type="submit"]')
    .click()
});

Then("the user should see a validation message of character not being found", () => {
  cy.contains('Not found.')
});


Given("the user has searched for a valid character", () => {
  cy.visit("http://localhost:4200")
  cy.get("#title")
    .should('have.text', 'The Star Wars Search')
  cy.get('#query')
    .type('Han')
  cy.get('[type="submit"]')
    .click()
});

When("the user clears the search form", () => {
  cy.get('#query')
    .clear()
  cy.get('[type="submit"]')
    .click()
});

Then("the user should see no search results", () => {
  cy.get("#characterName").should('not.exist')
  //
});

Given("the user has searched for a valid planet", () => {
  cy.visit("http://localhost:4200")
  cy.get("#title")
    .should('have.text', 'The Star Wars Search')
  cy.get('#planets')
    .click()
  cy.get('#query')
    .type('Coruscant')
  cy.get('[type="submit"]')
    .click()
});

When("the user switches category and searches for the same name", () => {
  cy.get('#people')
    .click()
  cy.get('#query')
    .clear()
    .type('Coruscant')
  cy.get('[type="submit"]')
    .click()
});

