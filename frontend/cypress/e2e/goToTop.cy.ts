/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
});

describe('goToTop Botton', () => {
  it('before scroll not exist', () => {
    cy.window().then((win) => {
      const scrollY = win.scrollY.toString();

      assert(scrollY === '0');
      cy.wrap(scrollY).should('eq', '0');

      cy.get('svg .fixed').should('be.not.exist');
    });

    cy.scrollTo(0, 500);

    cy.window().then((win) => {
      const scrollY = win.scrollY.toString();

      assert(scrollY > '0');
      cy.wrap(scrollY).should('not.eq', '0');

      cy.get('svg.fixed').should('exist');
    });
  });

  it('click on icon and go to top', () => {
    cy.scrollTo(0, 500);

    cy.get('svg.fixed').should('exist').click();
  });
});
