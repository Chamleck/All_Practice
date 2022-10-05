
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

//1
const hamburger = 4
const fries = 1
if(hamburger >= 4 && fries){console.log('Ми поїли')}
else{console.log('Ми йдемо в інше кафе')};

//1 Function solution
cafeFunc=(hamburger, fries)=>{
    if(hamburger >= 4 && fries){console.log('Ми поїли')}
    else{console.log('Ми йдемо в інше кафе')};
}
cafeFunc(4,1)
//2
const price = 1000
if(price>=1000&&price<=1900){console.log('price is between 1000 and 1900')}
else{console.log('not between 1000 and 1900')};
//2 Function solution
priceFunc=(price)=>{
    if(price>=1000&&price<=1900){console.log('price is between 1000 and 1900')}
    else{console.log('not between 1000 and 1900')};
}
priceFunc(1000)
//3
const price1 = 1000
if(price1 != 1001 && price1 != 1899 && price1 >= 1900 && price1 <= 1000){console.log('not between 1000 and 1900')}
else{console.log('price is between 1000 and 1900')};
//3 Function solution
priceFunc1=(price1)=>{
    if(price1 != 1001 && price1 != 1899 && price1 >= 1900 && price1 <= 1000){console.log('not between 1000 and 1900')}
    else{console.log('price is between 1000 and 1900')};
}
priceFunc1(1000)

//4
const num=1
if(num==1){console.log('spring')}
else if(num==2){console.log('summer')}
else if(num==3){console.log('autumn')}
else{console.log('winter')};
//4 Function solution
seasonFunc=(num)=>{
    if(num==1){console.log('spring')}
else if(num==2){console.log('summer')}
else if(num==3){console.log('autumn')}
else{console.log('winter')};
}
seasonFunc(1)

//5
var a=1
var b=2
var c=3
if(a < b && c > b){console.log('b is medium')}
else{console.log('b is not medium')};
//5 Function solution
compareFunc=(a,b,c)=>{
    if(a < b && c > b){console.log('b is medium')}
    else{console.log('b is not medium')};
}
compareFunc(1,2,3)

//6
let weekday = 5;
switch(weekday){
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
            break;
     case 6:
        console.log('saturday')
                break;
     case 7:
        console.log('friday')
                    break;
};
//6 Function solution
const WeekFunction =(weekday) =>{
    switch(weekday){
        case 1:
            console.log('monday')
            break;
        case 2:
            console.log('tuesday')
            break;
        case 3:
            console.log('wednesday')
            break;
        case 4:
            console.log('thursday')
            break;
        case 5:
            console.log('friday')
                break;
         case 6:
            console.log('saturday')
                    break;
         case 7:
            console.log('friday')
                        break;
    }
}
    WeekFunction(1)
//7
let par1 = 2;
let par2 = 4;
let caSe = 1
switch(caSe){
    case 1:
        console.log(par1 + par2)
        break; 
    case 2:
            console.log(par2 - par1)
        break; 
    case 3:
            console.log(par2 * par1)
        break;
    case 4:
            console.log(par2 / par1)
};
//7 function solution
const CalcFunction =(par1, par2, caSe) =>{
    switch(caSe){
        case 1:
            console.log(par1 + par2)
            break; 
        case 2:
                console.log(par2 - par1)
            break; 
        case 3:
                console.log(par2 * par1)
            break;
        case 4:
                console.log(par2 / par1)
    }
}
CalcFunction(2,4,3)
//8
let someText = 'Hello'
//набор символов
console.log(someText.replace(/[eo]/ig,''));
//или или
console.log(someText.replace(/[e|o]/ig,''));
//и
console.log(someText.replace(/[e&o]/ig,''));

//8 solved with function
// Задаем параметр функции в скобках который потом станет аргументом когда обращаясь к функции будет вставленно значение в скобках рядом
// с названием функции, команда return возвращает ту переменную/ее результат которую мы укажем следом
const ReplaceFunction = (someText) =>{

    let result = someText.replace(/[eo]/ig,'')

    return result
}
console.log(ReplaceFunction('Hello'))
//Без использования ретерн но передавая аргумент в параметр функции
/*
const ReplaceFunction = (someText) =>{

    console.log(someText.replace(/[eo]/ig,''))

}
 ReplaceFunction('Hello')
*/
/*
function Replace(){
    someText = 'Hello'
    console.log(someText.replace(/[eo]/ig,''))
    
}
Replace()
*/

//9

let distance = 100;
let kilometers = distance / 1000;
if(kilometers <= 4 && kilometers > 1||distance <=4 && distance > 1){
    console.log(distance +' метри - це ' + kilometers + ' кілометри')
}else if(  kilometers === 1 || kilometers === 21 || 
    kilometers === 31 || kilometers === 41 ||
    kilometers === 51 || kilometers === 61 ||
    kilometers === 71 || kilometers === 81 ||
    kilometers === 91 || kilometers === 101 ||
    distance === 1 || distance === 21 ||
    distance === 31 || distance === 41 ||
    distance === 51 || distance === 61 ||
    distance === 71 || distance === 81 ||
    distance === 91 || distance === 101
) {
console.log("second " + distance +' метр - це ' + kilometers + ' кілометр')
} else {
console.log(distance +' метрів - це ' + kilometers + ' кілометрів')
}
//Теж саме за допомогою функції
let distance = 211;
let kilometers = distance / 1000;

calc=(distance,kilometers= distance/ 1000)=>{
if (kilometers <= 4 && kilometers > 1||distance <= 4 && distance > 1 || isLastNumber_2(distance)) {
    console.log(distance +' метри - це ' + kilometers + ' кілометри')
} else if(isLastNumber_1(distance) || isLastNumber_1(kilometers)) {
 console.log(distance +' метр - це ' + kilometers + ' кілометр')
} else {
    console.log(distance +' метрів - це ' + kilometers + ' кілометрів')
}
// distance_1 это аргумент который будет принимать в себя значение которое будет находится справа в скобках от функции
function isLastNumber_1(distance_1) {
// вернуть номером то что будет происходить в скобках (аргумент приобразуется в строку, разделяется в массив, и отображается в обратном порядке, обращаемся к первому элементу массива и проверяем равен ли он 1)
    return Number(distance_1.toString().split("").reverse()[0]) === 1 &&
           Number(distance_1.toString().split("").reverse()[1]) != 1 &&
           Number(distance_1.toString().split("").reverse()[1]) != 0;
}
function isLastNumber_2(distance_2) {
      return Number(distance_2.toString().split("").reverse()[0]) <= 4 && 
             Number(distance_2.toString().split("").reverse()[1] ) > 1 && 
             Number(distance_2.toString().split("").reverse()[0] ) != 1&& 
             Number(distance_2.toString().split("").reverse()[0] ) != 0;
            
}
}
calc(30)