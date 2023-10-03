/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
  cy.scrollTo(0, 1900);
});

describe('Experiences Component', () => {
  it('Experiences title', () => {
    cy.get('h2').contains('EXPERIENCES').should('exist');
    cy.get('h2').contains('EXPERIENCES').should('be.visible');
  });

  it('Experiences length', () => {
    cy.get('.vertical-timeline-element--work')
      .its('length')
      .should('be.greaterThan', 0)
      .then((length) => {
        cy.log(`Number of experiences: ${length}`);
      });
  });
});
