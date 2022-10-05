/// <reference types="cypress"/>

it("Домашка по поиску элементов на открытой странице",() => {

    // Відвідування сайту
    cy.visit ('https://sanitarskyi-ngx-admin.herokuapp.com');

    // Пошук елементу за назвою атрибуту та його значенням, натискання на цей елемент
    cy.get('[alt="Material Dark Theme"]').click();

    // Пошук елементу за назвою атрибуту та його значенням який відповідає за дропдаун "forms" та клік по ньому
    cy.get('[title="Forms"]').click();

    //Пошук елементу за назвою атрибуту та його значенням який відповідає за дропдаун "form layouts" та клік по ньому
    cy.get('[title="Form Layouts"]').click();

    // Пошук за вмістом наведенних символів в тегу
    cy.get ('nb-card-header:contains("Inline form")');

    // Пошук по атрибуту зі значенням
    cy.get('[placeholder="Jane Doe"]');

    // Пошук першого поля мєйл за допомогою фільтраціі по першому знайденому єлементу так як не було унікальних локаторів
    cy.get('input[placeholder="Email"]').first();
    //cy.get('nb-card[class="inline-form-card"] input[placeholder="Email"]')

    //Пошук чекбокса по значенню класу за допомогою фільтрації по першому знайденному елементу
    cy.get('form>nb-checkbox span.custom-checkbox');

    // Пошук за вмістом наведенних символів за допомогою фільтрації по першому знайденному елементу
    cy.get('span:contains("Remember me")').first();

    // Перша кнопка "Submit" конкретизація селектора за допомогою зазначення двох атрибутів а також пошук по першому елементу
    cy.get('[nbbutton][status="primary"]').first();

    //Пошук по id
    cy.get('#inputEmail');

    //Пошук за вмістом наведенних символів
    cy.get('nb-card-header:contains("Using the Grid")');

    //Пошук по id
    cy.get('#inputPassword2');

    //Пошук за вмістом наведенних символів
    cy.get('span:contains("Option 1")');

    //Пошук за вмістом наведенних символів
    cy.get('span:contains("Option 2")');

    //Пошук за вмістом наведенних символів
    cy.get('span:contains("Disabled Option")');

    //кнопка "Sign in" конкретизація селектора за допомогою зазначення двох атрибутів а також пошук по останньому елементу
    cy.get('[nbbutton][status="primary"]').last();

    //Пошук за вмістом наведенних символів
    cy.get('nb-card-header:contains("Basic form")');

     //Пошук по id
     cy.get('#exampleInputEmail1');

     //Пошук по id
     cy.get('#exampleInputPassword1');

     //Пошук чекбокса по структурі дом із зазначенням класу за допомогою фільтрації по першому знайденному елементу
    cy.get('div>nb-checkbox span.custom-checkbox').first();

    //Пошук за вмістом наведенних символів
    cy.get('span:contains("Check me out")');

    //кнопка "Submit" конкретизація селектора за допомогою зазначення атрибуту і значення
    cy.get('[status="danger"]');

    //Пошук за вмістом наведенних символів
    cy.get('nb-card-header:contains("Form without labels")');

    //Пощук за атрибутом та його значенням
    cy.get('[Placeholder="Recipients"]');

    //Пощук за атрибутом та його значенням
    cy.get('[Placeholder="Subject"]');

    //Пощук за атрибутом та його значенням
    cy.get('[Placeholder="Message"]');

    //кнопка "Send" конкретизація селектора за допомогою зазначення атрибуту і значення
    cy.get('[status="success"]');

    //Пошук за вмістом наведенних символів
    cy.get('nb-card-header:contains("Block form")');

    //Пощук за атрибутом та його значенням
    cy.get('[Placeholder="First Name"]');

    //Пощук за атрибутом та його значенням
    cy.get('[Placeholder="Last Name"]');

    //Пошук по id
    cy.get('#inputEmail');

    //Пошук по id
    cy.get('#inputWebsite');

    //Пошук за класом останньої кнопки Submit
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition');

    //Пошук за вмістом наведенних символів
    cy.get('nb-card-header:contains("Horizontal form")');

    //Пошук по id
    cy.get('#inputEmail3');

    //Пошук по id
    cy.get('#inputPassword3');

    //Пошук чекбокса по структурі дом із зазначенням класу за допомогою фільтрації по останньому знайденному елементу
    cy.get('div>nb-checkbox span.custom-checkbox').last();

    // Пошук за вмістом наведенних символів за допомогою фільтрації по останньому знайденному елементу
    cy.get('span:contains("Remember me")').last();

    //кнопка "Sign in" конкретизація селектора за допомогою зазначення двох атрибутів одного зі значенням
    cy.get('[nbbutton][status="warning"]');
})
it.skip("Примеры поиска элементов",() => {
    // находим кнопку с помощью уникального айди который находится в дом структуре где есть искомая кнопка.
    cy.get('#inputEmail13')
    //указываем родительский элемент для искомой кнопки
    .parents ('form')
    //находим тег отвечающий за искомую кнопку
    .find('button')
    //Удостоверимся что эта кнопка содержит сайн ин
    .should('contain','Sign in')
    //указываем родителя снова для поиска еще одного элемента
    .parents('form') 
    // Ищем этот элемент
    .find('nb-checkbox')
    // нажимаем
    .click()
    //Тут ищем по названию блока горизонтал форм и внутри него ищем атрибут с значением имейл правда не понятно зачем тут тег нб кард
    cy.contains('Horizontal form','nb-card').find([type="Email"])


    
})