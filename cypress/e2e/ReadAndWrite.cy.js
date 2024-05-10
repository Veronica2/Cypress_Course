/// <reference types="Cypress" />

describe('Cypress File', () => {
  it('Read/Write into json file', () => {
    cy.writeFile('test-data/data.json',{name:'Peter', email:'peter@example.com'})

   cy.readFile('test-data/data.json').then((user) => {
   expect(user.name).to.equal('Peter')
   expect(user.email).to.equal('peter@example.com')
  })
})
 
  it('Write into plain text file', ()=> {
    cy.writeFile('test-data/plain.txt','Hello world','ascii')
  })

})