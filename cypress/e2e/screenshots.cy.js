/// <reference types="Cypress" />

describe('Cypress screenshot', () => {
  it('Full page screenshot', () => {
    cy.visit('https://example.com')
    cy.screenshot({overwrite:true})
  })

  it('Single screenshot', () => {
    cy.visit('https://example.com')
    cy.get('h1').screenshot({overwrite:true})
  })
})