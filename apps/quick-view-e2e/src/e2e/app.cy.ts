describe('quick-view', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1').contains('Welcome to Program Quick View');
  });

  it('should toggle spotlight when cmd + k is pressed and be dismissed on escape', () => {
    cy.get('body').trigger('keydown', { key: 'Meta' });
    cy.get('body').trigger('keydown', { key: 'k' });
    cy.get('[data-cy="spotlight"]').should('be.visible');
    cy.get('body').trigger('keydown', { key: 'Escape' });
    cy.get('[data-cy="spotlight"]').should('not.exist');
  });
});
