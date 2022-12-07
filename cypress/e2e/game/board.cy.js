beforeEach(() => {
    // We'll take the command we used above to check off an element
    // Since we want to perform multiple tests that start with checking
    // one element, we put it in the beforeEach hook
    // so that it runs at the start of every test.
    cy.setBoardState();
  })

  it('has 51 tiles', () => {
    cy.get('.tile')
      .should('have.length', 51)
  });

  it('each tile should have an icon and a number', () => {
    cy.get('.tile')
        .last()
        .find('img')
        .should('be.visible')
    
    cy.get('.tile')
        .last()
        .find('span')
        .should('have.text', 51)
  });

  it('The modal window should work when clicking on a square', () => {
    cy.get('[data-test=tile-51]')
        .find('a')
        .click();
    
    cy.get('[data-test=modal-content-51]').should('be.visible');

    cy.get('[data-test=modal-close-51]').click();

    cy.get('[data-test=modal-content-51]').should('not.exist');
  });

  it('After clicking on a square the square should show the dollar amount', () => {
    const amounts = ['$-5.00', '$1.00', '$5.00', '$20.00', '$50.00'];
    
    cy.get('[data-test=tile-51]')
        .find('a')
        .click();
    
    cy.get('[data-test=modal-content-51]').should('be.visible');

    cy.get('[data-test=modal-close-51]').click();
    
    cy.get('[data-test=tile-51]').should('have.class', 'chosen')
    cy.get('[data-test=tile-51]')
        .find('.tile-content')
        .should(($div) => {
            expect(amounts).to.include($div.text())
        })
  });