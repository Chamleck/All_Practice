/// <reference types="cypress"/>

it('quering', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.get('#email')
    .type('abc')
    .should('have.value', 'abc')
    //стрілочки які переміщують елемент та дилей який робить затримку після кожної дії
    cy.get('#email')
    .clear()
     //імітує діїї кнопок клавіатури
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay:1000})
    .type('{selectAll}{backspace}');
    // в команді тайп є форс який примусово печатає в заблокованому елементі
    cy.get('textarea[disabled="disabled"]')
    .type('bla bla',{force:true})
    //focus дозволяє сфокутуватись на якомусь елементі
    cy.get('#password1')
    .focus()
    // prev попередній елемент
    .prev()
    .should('have.attr','style')
    .and('eq','color: orange')

    cy.get('#cuponCode1')
    .type('sometext')
    .closest('form')
    .submit();

    cy.get('.action-form')
    .should('not.contain','Yor form has been submited!')
    .find('#cuponCode1')
    .type('sometext')
    .closest('form')
    .submit('contain','Yor form has been submited!')
    // closes шукає ближній елемент тільки вгору
    cy.get('div.well')
    eq(5)
    .should('not.contain','Yor form has been submited!')
    .find('#cuponCode1')
    .type('sometext')
    .closest('form')
    .submit()
    .siblings()
    .submit('contain','Yor form has been submited!');
    //click може приймати координати вони починаються з ліва з верху
    cy.get('#action-canvas').click(125,125)
    cy.get('#action-canvas').click(25,25)
    // щоб натиснути більше ніж на один елемент
    cy.get('.lebel.label-primary').click({multiple:true});

    cy.get('.btn.btn-lg.btn-primary').click({force:true});

    cy.get('.action-checkboxes [value="checkobox1"]')
    .should('not.be.checked')
    .check()
    .should('be.checked')

    cy.get('.action-checkboxes [value="checkobox2"]')
    .should('not.be.checked')
    .check()
    .should('be.checked')

})