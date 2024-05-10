/// <reference types="Cypress" />

import ExamplePage from '../pages/ExamplePage'

describe('Cypress e2e demo', () => {
  beforeEach(() =>{
    const examplePage = new ExamplePage()
    examplePage.openExamplePage()
  })

  afterEach(() =>{
    cy.log('Run after each of my test')
  })

  it('Assert Url and Title', () => {    // it.only run only the test selected
    const examplePage= new ExamplePage()
    examplePage.assertUrl()
    examplePage.assertTitle()
  })

  it('Assert Element',() =>{   
    cy.get("h1").should('be.visible')
    cy.wait(2000)
    cy.get("p").should('be.visible')
   })

  it('Reload and logs', () =>{ //it.skip do not execute the test
  //cy.visit('https://example.com')
  cy.log('Before Reload')
  cy.reload()
  cy.log('After reaload')
  }) 
})