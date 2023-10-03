/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
  cy.scrollTo(0, 1500);
});

describe('Skills Component', () => {
  it('Skills title', () => {
    cy.get('h2').contains('SKILLS').should('exist');
    cy.get('h2').contains('SKILLS').should('be.visible');
  });

  it('Skills length', () => {
    cy.get('[data-testid="skills"]').within(() => {
      cy.get('div')
        .its('length')
        .should('be.greaterThan', 0)
        .then((length) => {
          cy.log(`Number of skills: ${length}`);
        });
    });
  });
});
