"use strict"
//Переменная которую можно изменить
let number = 5;
//переменная которую нельзя изменить
const number1 = 1000;

// camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

console.log(number);
console.log(number1);

// объект константа, значения внутри объекта можно менять.
const obj = {
    age: 20
};
obj.age = 11;
// var переменная существует еще до того как компилятор дойдет до этой строки
var firstName = 'Taras';
firstName = 'Dima';

//область видимости
{
    let number2 = 4;
    console.log(number2);
}
//консоль лог с выводом переменной за скобками не виден, он вне области видимости
console.log(number2);

let a = 1,
b = 2,
c = 3;