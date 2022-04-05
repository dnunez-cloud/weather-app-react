///<reference types = "cypress"/>

beforeEach('Enter to main page',()=>{
  cy.visit('/')
  cy.get('a').click()
})

describe('Test countries items',()=>{
  it('main page contains country Argentina',()=>{
    cy.get('h6').should('contain','Argentina')
  })

  it('main page contains country Colombia',()=>{
    cy.get('h6').should('contain','Colombia')
  })
})