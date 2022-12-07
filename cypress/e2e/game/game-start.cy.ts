beforeEach(() => {
    // We'll take the command we used above to check off an element
    // Since we want to perform multiple tests that start with checking
    // one element, we put it in the beforeEach hook
    // so that it runs at the start of every test.
    cy.visit('/')
  })

  it('has the right title text', () => {
    cy.get('.title-content h1')
      .should('have.length', 1)
      .should('have.text', 'Santa\'s Big Fat Ass Bonus Game')
    
    cy.get('.mary').should('have.text', ' A Drunk Mary Production')
  })

  it('advances to the player select when start is clicked', () => {
    cy.get('[data-test=start-game-button]').click();
    cy.get('.game-start-header').should('be.visible');
    cy.get('.player-form').should('be.visible');
  })

  it('can add a player to the list', () => {
    cy.get('[data-test=start-game-button]').click();

    cy.get('[data-test=new-player-name]').type('Preston');
    cy.get('[data-test=new-player-button]').click();

    cy.get('.player-list').should('be.visible');
    cy.get('.candy-stripe').should('be.visible');
    cy.get('.player-list ul li').should('have.length', 1);
    cy.get('[data-test=new-player-name]').should('have.text', '');
  })

  it('can add multiple players', () => {
    cy.get('[data-test=start-game-button]').click();

    cy.get('[data-test=new-player-name]').type('Preston');
    cy.get('[data-test=new-player-button]').click();
    cy.get('[data-test=new-player-name]').type('Kayla');
    cy.get('[data-test=new-player-button]').click();
    cy.get('[data-test=new-player-name]').type('Logan');
    cy.get('[data-test=new-player-button]').click();

    cy.get('.player-list').should('be.visible');
    cy.get('.candy-stripe').should('be.visible');
    cy.get('.player-list ul li').should('have.length', 3);
    cy.get('[data-test=new-player-name]').should('have.text', '');
  })