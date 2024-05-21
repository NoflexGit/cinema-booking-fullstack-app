/// <reference types="cypress" />

describe('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should render the logo with correct classes and text', () => {
    // Check if the main div with the data-test-id exists
    cy.get('[data-test-id="logo"]').should('exist');

    // Check the first span
    cy.get('[data-test-id="logo"] span')
      .eq(0)
      .should('have.class', 'text-indigo-400')
      .and('have.text', 'n');

    // Check the second span
    cy.get('[data-test-id="logo"] span')
      .eq(1)
      .should('have.class', 'text-purple-400')
      .and('have.text', 'o');

    // Check the third span
    cy.get('[data-test-id="logo"] span')
      .eq(2)
      .should('have.class', 'text-pink-400')
      .and('have.text', 'm');

    // Check the fourth span
    cy.get('[data-test-id="logo"] span')
      .eq(3)
      .should('have.class', 'text-rose-300')
      .and('have.text', 'o');
  });

  it('should render login button', () => {
    cy.get('[data-test-id="login-button"]').should('exist');
  });
});
