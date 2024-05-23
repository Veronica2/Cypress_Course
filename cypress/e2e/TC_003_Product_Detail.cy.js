/// <reference types="Cypress" />

describe('TC_003_Product?Detail', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/index.html')

    cy.get('.hrefch').contains('Samsung galaxy s7').click()
    cy.get('.product-deatil').should('be.visible')
    cy.get('h2.name').contains('Samsung galaxy s7').should('be.visible')
    cy.get('h3.price-container').should('contain','$800')
    cy.get('.btn-lg').should('contain','Add to cart')
    

  })
})