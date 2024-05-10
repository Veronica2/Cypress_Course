/// <reference types="Cypress" />

import ExamplePage from "../pages/ExamplePage"

describe('Scrollng into Cypress', () => {    
    it('Scroll into footer', () => {    
        cy.visit('https://practice-automation.com/')
        cy.get('footer').scrollIntoView()
      })

})
