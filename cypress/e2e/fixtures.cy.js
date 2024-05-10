/// <reference types="Cypress" />

describe('Cypress Modal', () => {
    it('Open and Asserts Modal', () => {
      cy.visit('https://practice-automation.com/modals/')
      cy.get('#formModal').click()

      cy.fixture('example.json').as('userData')
      cy.get('@userData').then((user) => {
        cy.get('#g1051-name').type(user.name)
        cy.get('#g1051-email').type(user.email)
        cy.get('#contact-form-comment-g1051-message').type(user.body)
        cy.contains('Submit').click()

      })
    })
  })
