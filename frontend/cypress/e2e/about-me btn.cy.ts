/// <reference types='cypress'/>

beforeEach(() => {
  cy.visit('/');
});

describe('About Me Btn', () => {
  it('click on about me btn exist and scroll down', () => {
    const btn = cy
      .contains('button', 'About Me')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .and('have.text', 'About Me');

    cy.window().then((win) => {
      const scrollY = win.scrollY.toString();
      cy.log('scrollY before click :', scrollY);

      assert(scrollY === '0');
      cy.wrap(scrollY).should('eq', '0');
      //   cy.wrap(scrollY).as('scrollY');
    });

    btn.click();

    cy.window().then((win) => {
      const scrollY = win.scrollY.toString();
      cy.log('scrollY after click :', scrollY);

      assert(scrollY > '0');
      cy.wrap(scrollY).should('not.eq', '0');
    });

    // cy.get('@scrollY').then((scrollY) => {
    //   cy.log('scrollY', scrollY);
    // });
  });
});
