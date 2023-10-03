/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
  cy.scrollTo(0, '100%');
  // cy.stub(window, 'open').as('windowOpen');
});

describe('Social Icons', () => {
  it('4 icons exists', () => {
    cy.get('[data-testid="footer"]').within(() => {
      cy.get('[role="img"]').should('have.length', 4);
    });
  });

  it.skip('click to first icon', () => {
    cy.get('[data-testid="footer"]').within(() => {
      cy.get('[role="img"]').first().click();
    });
  });

  it('check url of all icons', () => {
    // first icon
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.get('[role="img"]')
      .first()
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledWith', 'mailto:esrafil.elahi@gmail.com');
      });

    // second icon
    cy.get('[role="img"]')
      .eq(1)
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledWith', 'https://github.com/esrafilelahi');
      });

    // thirs icon
    cy.get('[role="img"]')
      .eq(2)
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledWith', 'https://gitlab.com/esrafil');
      });

    // fourth icon
    cy.get('[role="img"]')
      .eq(3)
      .click()
      .then(() => {
        cy.window().its('open').should('be.calledWith', 'https://www.linkedin.com/in/esrafil-elahi');
      });
  });
});
