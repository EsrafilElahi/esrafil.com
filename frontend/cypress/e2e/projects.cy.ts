/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
  cy.scrollTo(0, 1000);
});

describe('Projects Component', () => {
  it('projects title', () => {
    cy.get('h2').contains('PROJECTS').should('exist');
    cy.get('h2').contains('PROJECTS').should('be.visible');
  });

  it('projects length', () => {
    cy.get('article').should('have.length.greaterThan', 0);

    cy.get('article')
      .its('length')
      .should('be.greaterThan', 0)
      .then((length) => {
        // 'length' contains the number of 'article' elements
        cy.log(`Number of articles: ${length}`);
      });
  });

  it('click to one project card', () => {
    cy.get('article').first().find('a').click({ force: true });
  });
});
