/// <reference types="cypress"/>




const params = [
    {position: 'top-right',  
    title:'Ooops',
    content:'Baby',
    background: 'rgb(233, 29, 99)',
    toastType:'primary',
    location: 'justify-content: flex-end; align-items: flex-start;'},

    {position: 'top-left', 
    title:'Whats up',
    content:'Man',
    background: 'rgb(96, 175, 32)',
    toastType:'success',
    location: 'justify-content: flex-start; align-items: flex-start;'},

    {position: 'bottom-left', 
    title:'Who are',
    content:'you',
    background: 'rgb(4, 149, 238)',
    toastType:'info',
    location: 'justify-content: flex-start; align-items: flex-end;'},

    {position: 'bottom-right', 
    title:'Where is my',
    content:'Lady',
    background: 'rgb(255, 159, 5)',
    toastType:'warning',
    location: 'justify-content: flex-end; align-items: flex-end;'}
]


before(() => {
    cy.visit('/');
    cy.get ('[alt="Material Dark Theme"]').click();
    cy.get ('.menu-title.ng-tns-c141-19').click();
    cy.get ('.menu-title.ng-tns-c141-23').click().wait(4000);
})

params.forEach(({position, title,  content, background,toastType,location},index) => {
    it(`Selecting position ${position} adding ${title} and ${content} to fields`, () => {
    cy.get('[type="button"]',{timeout:15000}).eq(1).click()
    cy.get(`[ng-reflect-value="${position}"]`).click()
    cy.get('[type="button"]').eq(1).should('contain.text', position)
    cy.get('[type="button"]').eq(2).click()
    cy.get(`[ng-reflect-value="${toastType}"]`).click()
    cy.get('[type="button" ]').eq(2).should('contain.text', toastType)
    cy.get('[name="title"]').clear().type(title)
    cy.get('[name="title"]').should('contain.value', title)
    cy.get('[name="content"]').clear().type(content)
    cy.get('[name="content"]').should('contain.value', content)
    cy.get('button:contains("Show toast")').wait(2000).click()
    
    //cy.wrap
    cy.get('nb-toast').then(cell=>{
        //cy.wrap(cell) /можна використовувати звичайні команди should
        expect(cell).to.have.css('background-color').to.eq(background)
        expect(cell).to.have.text(`Toast ${index+2}. ${title}${content}`)
        //expect(cell).closeTo(`[style= "${location}"]`)
        
        
        
    cy.get(`[style= "${location}"]`).find(cell)
    .should('contain',`Toast ${index+2}. ${title}${content}`)//.to.have.text(`Toast ${index+2}. ${title}${content}`)
    
})
})
})
//button[ng-reflect-ng-class]
 //expect(cell.attr('class')).to.eq('title subtitle').and('contain.value', title)
//cy.get('nb-toastr')
   //.should('have.css', 'backgroud-color')
   //.and('eq','rgb(233, 29, 99)')
