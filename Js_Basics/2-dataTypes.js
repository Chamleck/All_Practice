/*
Типі данных:

Простые или примитивные:
-числа
-текст
-логический или булиновый
-null
-undefined
-Symbol
-BigInt

Объекты:
-массивы
-функции
-объект даты
-регулярные выражения
-ошибки
-объект
*/

// int - числа до 2^53

let number = 3;
let floatNumber = 5.5;
//получим бесконечность
console.log(4/0);
console.log(-4/0);
// получим не число
console.log('a'* 5);
//текст в ковычках
let text = '4';
//булиновые
let booleanType = true; //false
//null
let a = null;
//undefined
let b;

//object
let.person = {
    age: 20,
    name: 'Dmytro',
    isMarried: true
};

console.log('возвраст'+ person.age);
//операция конкатенации с помощью знака $ нужно заключать в косые ковычки
console.log(`'Имя' ${person.name}`);
console.log(`'Семейный статус' ${isMarried}`);
//перечисление
console.log(`'Имя' ${person.name} ${isMarried}`);

let endpoint = 'help';
console.log (`https://someurl/${endpoint}`);
//массив наполненный текстом, цифрой, объектом, массивом в массиве
let arr = ['text', 6, {a:1, b:2, c:3}, [1,2,3]];
//обращаемся к 4 елементу внутри массива то есть к массиву и внутри него к второму
console.log(arr[3][1]);
//Обращение к третьему элементу внутри массива и к первому в объекте
console.log(arr[2].a);
//Обращение к третьему элементу внутри массива и к первому в объекте и к 4 массиву и второму объекту в нем одновременно
console.log(arr[2].a, arr[3][1]);

let numArr = [1,2,3];
let numObj = {a:1, b:2, c:3};
//Обращение к цифрам через [] обращение к текстовым елементам через .
console.log (numArr[0]);
console.log (numObj.a);


let salary = {
    'Anna': 1000,
    'Vlada': 1200
};
let salaryArr = ['Anna', 1000, 'Vlada', 1200];

let someArr = [1, 2, 3];
let objArr = {
    0: 1,
    1: 2,
    2: 3
};
console.log(someArr[0]);
console.log(objArr[0]);

let objArr1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(objArr1['a']);

let num = 1;
console.log(num);
num = 2;
console.log(num);

const objArr2 = {
    a: 1,
    b: 2,
    c: 3
};

console.log(objArr2.a);

objArr2.a = 5;

const objArr3 =
{
    a:1,
    b:2,
    c:{
        someKey:{

            someKey:12
        }
    },
    d:{
        someKey:[1,2,3]
    }
};
//обращаемся к с в объекте далее к соме кей и к сомкей внутри него
console.log (objArr3,c.someKey.someKey);
//обращаемся к объекту d и внутри него к второму элементу массива который называется соме кей
console.log (objArr3.d.someKey[1]);

let someText ='Hello World';
//отобразить количество символов
console.log(someText.length);
//отобразить от нулевого до 4 символа
console.log(someText.substring(0,4));
//изменить регистр символов
console.log(someText.toLowerCase);
console.log(someText.toUpperCase);
//отобразит какой символ по счету
console.log(someText.indexOf('o'));

console.log(someText.substring(0,someText.length -3));
//оставляет текст с первого символа до 4
console.log(someText.slice(0,4));
//удаляет пробелы и переносы строки в начале и конце
console.log(someText.trim());
//выводит символ по его индексу(счету)
console.log(someText.charAt(1));
//выводит символ по индексу
console.log(someText[1]);


//Массивы
//наполняем массив косвеено командой пуш
let myArr =[];
myArr.push('Доброго вечора');
myArr.push('Доброго ранку');

console.log(myArr);
//возвращает длинну массива
console.log(myArr.length);
//соединяет данн в массиве
console.log(myArr.join());
//добавили пробел
console.log(myArr.join(" "));
//выводит последнее значение
console.log(myArr.pop());