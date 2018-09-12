describe('Change colour and image', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
  })

  it('Gold button changes image and text correctly', () => {
    cy.get('#gold').click()
    cy.get('img').should('be.visible');
    cy.contains('Colour: Gold')
  })

  it('Silver button changes image and text correctly', () => {
    cy.get('#silver').click()
    cy.get('img').should('be.visible');
    cy.contains('Colour: Silver')
  })

  it('Space Grey button changes image and text correctly', () => {
    cy.get('#space_grey').click()
    cy.get('img').should('be.visible');
    cy.contains('Colour: Space Grey')
  })

  it('handles multiple clicks correctly', () => {
    cy.get('#gold').click()
    cy.get('img').should('be.visible');
    cy.get('#silver').click()
    cy.get('img').should('be.visible');
  })
})

describe('Change Capacity and Price', () => {
  it('256 button changes capacity description and prices', () => {
    cy.get('#twofivesix').click()
    cy.contains('Capacity: 256GB')
    cy.contains('From £275 upfront cost')
    cy.contains('When you pay £46.80 a month')
  })

  it('64 button changes capacity description and prices', () => {
    cy.get('#twofivesix').click()
    cy.get('#sixtyfour').click()
    cy.contains('Capacity: 64GB')
    cy.contains('From £149 upfront cost')
    cy.contains('When you pay £43.20 a month')
  })
})
