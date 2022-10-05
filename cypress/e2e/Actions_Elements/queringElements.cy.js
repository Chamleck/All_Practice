/// <reference types="cypress"/>

it('quering', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    //різні способи перевірки на вміст
    cy.get('#query-btn')
    .should('contain', 'Button');

    cy.get('#query-list')
    .contains('bananas')
    .should('have.class', 'third');

    cy.contains('bananas')
    .should('have.class', 'third')

    cy.get('li','bananas')
    .should('have.class','third');

    cy.get('li:contains("bananas")')
    .should('have.class','third');
})

it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    //пошук в середині бажаного елементу, наприклад якась форма
    cy.get('.query-form').within(()=>{

    cy.get('#inputEmail').should('exist');
    cy.get('#inputPassword').should('exist');
    })


    cy.root().should('contain','apples')
})

it('commands to find elements', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    //шукаємо дочірній елемент за допомогою команди child
    cy.get('ol.traversal-breadcrumb.breadcrumb')
    .children('.active');
    //пошук найближчого елементу до вказаного в cy.get
    cy.get('.traversal-badge')
    .closest('ul')
    .should('have.class', 'list-group');

    cy.contains('John')
    .should('contain', 'John')
    .closest('table')
    .should('have.class', 'table')

    //find аналогічно within але тут шукається тільки один елемент
    cy.get('.pagination.traversal-pagination')
    .find('a')
    .contains('4')
    //взяли битьківський елемент і потім наступний до нього і так далі
    cy.get('.traversal-ul')
    .contains('apples')
    .next()
    .should('contain', 'oranges')
    .next()
    .should('contain', 'bananas')
    //проверка что следующ ел-ов будет 4
    cy.get('.traversal-ul')
    .contains('apples')
    .nextAll()
    .should('have.length', 4)
    //беремо локатор з двома кнопками, вказуємо яку не шукаємо
    //і перевіряємо що друга кнопка має статус enabled
    cy.get('.traversal-disabled [type="button"]')
    .not('[disabled="disabled"]')
    .should('be.enabled')
    //бере всі сусідні елементи одного рівня
    cy.get('.nav.nav-pills.traversal-pills li.active')
    .siblings()
    .should('have.length', 2);

})
