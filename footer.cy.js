describe('Footer Tests', () => {
    it('Проверяет футер на главной странице', () => {
        cy.visit('/');
        // Закрытие cookie-баннера, если нужно
        cy.get('footer').should('exist');
        cy.contains('footer', 'Начать проект').should('exist');
    });

    it('Проверяет футер на /projects', () => {
        cy.visit('/projects');
        // Закрытие cookie-баннера, если нужно
        cy.get('footer').should('exist');
        cy.contains('footer', 'Начать проект').should('exist');
    });
});
