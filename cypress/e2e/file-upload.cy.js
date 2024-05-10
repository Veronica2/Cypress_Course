/// <reference types="Cypress" />

import ExamplePage from "../pages/ExamplePage"

describe('Cypress File Upload', () => {    
    it('Should upload JSON example file', () => {    
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
        cy.get('#file-submit').click()
       
        cy.get('h3').should('be.visible')
      })

})