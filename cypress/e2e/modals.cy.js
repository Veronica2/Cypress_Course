/// <reference types="Cypress" />

describe('Cypress Modal', () => {
  it('Open and Asserts Modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click()
    cy.get('#pum_popup_title_1318').should('be.visible')
    cy.get('p').contains('Hi, I’m a simple modal.').should('be.visible')
  })
})