/// <reference types="Cypress" />

describe('Forms, buttons & Checkbox', () => {
  it('Submit and Assert Forms', () => {
    //Variables with Data
    const name='Peter'
    const drink='Water'
    const color='Red'
    const email='peter@test.com'
    const message='I Like Cypress'
    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[class="entry-content"]').should('be.visible')
    // Fill the form
    cy.get('#name').type('Peter')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.get('#email').type('peter@mail.com')
    cy.get('#message').type('This is a test')
    cy.contains('Submit').click()
 
    // Assert Form Details
    /*cy.get('.field-value').contains(name).should('be.visible')
    cy.get('.field-value').contains(drink).should('be.visible')
    cy.get('.field-value').contains(color).should('be.visible')
    cy.get('.field-value').contains(email).should('be.visible')
    cy.get('.field-value').contains(message).should('be.visible')*/

  })
})