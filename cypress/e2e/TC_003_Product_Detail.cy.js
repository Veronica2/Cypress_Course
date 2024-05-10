/// <reference types="Cypress" />

describe('TC_003_Product?Detail', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/index.html')

    cy.get('.hrefch').contains('Samsung galaxy s7').click()

    cy.get('#logInModal').should('be.visible')
    cy.wait(2000)
    cy.get('#loginusername').type('test',{force:true})
    cy.get('#loginpassword').type('test',{force:true})
    cy.contains('button', 'Log in').click()
    cy.wait(2000)
    cy.get('#nameofuser').should('contain','Welcome test')

  })
})