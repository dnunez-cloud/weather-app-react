///<reference types = "cypress"/>

describe('first test',()=>{
  it('first test',()=>{
    cy.visit('/')
    cy.get('a').click()
  })
})