/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
  cy.contains('button', 'About Me').click();
});

describe('About Me', () => {
  it('there is about me title and text', () => {
    cy.get('h2').contains('ABOUT ME').should('exist');
    cy.get('h2').contains('ABOUT ME').should('be.visible');
    cy.get('h2').contains('ABOUT ME').should('have.class', 'title');
    cy.get('h2').contains('ABOUT ME').should('have.class', 'lines');
  });
});
