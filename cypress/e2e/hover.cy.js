/// <reference types="Cypress" />

describe('Cypress hovers', () => {
  it('Lets test hover workaround', () => {
    //cy.viewport(800,600)
    cy.viewport('macbook-16')
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain','You did it!')

    cy.get('h1').should('have.length',1)
  })
})