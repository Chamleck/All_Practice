/** ЗАВДАННЯ 1
  *
  * 1. Оголосіть змінну та присвойте їй стрілочну функцію
  *
  * 2. У функції не повинно бути параметрів
  *
  * 3. Поверніть з функції рядок "Привіт, світ!"
  *
  * 4. Викличте функцію та виведіть результат у консоль
  *
  */


/** ЗАВДАННЯ 2
  *
  * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
  *
  * 2. Використовуйте стрілочну функцію
  */


/** ЗАВДАННЯ 3
  *
  * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
  * - name
  * - surname
  * - favoriteNumber
  *
  * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
  *     створюватиме в ньому додаткове поле age з довільним значенням.
  * Результат роботи функції це вивід у консоль рядка
  * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
  */


/** ЗАВДАННЯ 4
  *
  * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
  *
  * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
  *
  * 3. В функції замініть елемент масиву з типом int на інший з типом string
  *
  * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
  */

/** ЗАВДАННЯ 5
  *
  * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
  *
  * setTimeout(function myFn() {
  * console.log('hello from myFn')
  * }, 2000)
  *
  * myFn()
  */

/** ЗАВДАННЯ 6
  *
  * 1. Створіть масив із 3 об'єктами "cars"
  *
  * 2. Кожен об'єкт повинен мати три властивості
  * - carBrand (рядок)
  * - price (число)
  * - isAvailableForSale (логічне значення)
  *
  * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
  *
  * 4. В середині функції додайте ще один такий же обʼєкт в масив.
  *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
  *
  * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
  */


/** ЗАВДАННЯ 7
  *
  * 1. Створіть обʼєкт
  *
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  *
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  *
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
  *     то виводьте значення властивості в консоль.
  */


/** ЗАВДАННЯ 8
  *
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  *
  * 2. Функція повинна повернути товар із певним ID
  *
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  *
  * 4. Також всередині функції виведіть у консоль товар по ID

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */


/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

 /**
  * ПІДКАЗКИ
  *
  * Підказка 1: Використовуйте метод масивів "every"
  * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
  * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
  */

 //1

 conts = func = () =>{
  console.log('Hello world');
}
func();
//second variation
conts = func = () =>{
 let text = 'hello world';
 return text;
};
console.log(func());

//2

conts = func = () =>{
 console.log('Hello world');
};
setTimeout(func,5000);
//second variation
conts = func = () =>{
 setTimeout(function(){
     console.log('Hello world');
 }, 5000);
};
func();

//3
//створення масиву
 let personInfo ={
   name: 'Nick',
   surname: 'Kolotkov',
   favoriteNumber: 1
 };
//створення функції яка додає елемент до об'єкту та повертає значення з об'єкту, у цій функції задаємо параметр person в який при виклику функції 
//буде підставлено об'єкт
 const addAge = (person)=>{

   person.age = 30;
   return `my name is ${person.name} ${person.surname} , I'm ${person.age} years old and my favorite number is ${person.favoriteNumber}`
 };

  console.log (addAge(personInfo));
//
  let personInfo ={
   name: 'Nick',
   surname: 'Kolotkov',
   favoriteNumber: 1
 };

  const addAge =(person)=>{

   person.age = 30;
   console.log(`my name is ${person.name} ${person.surname} , I'm ${person.age} years old and my favorite number is ${person.favoriteNumber}`);
 };
 
   addAge(personInfo);

//4
   let massive = [1,'string', booleanType = true];

   const changeElement = (inputMassive) =>{
     massive [0] = ['one'];
     console.log(inputMassive);
   }
   changeElement(massive);

   //5
    const myFn = () => {
     setTimeout(function(){
     console.log('hello from myFn');
    }, 2000);
   }
    myFn();

    //6
    //тут замінено третє авто на інше
    let carList = [car1 = {carBrand: 'Audi', price: 10, isAvailableForSale: false}, 
     car2 = {carBrand: 'BMV', price: 11, isAvailableForSale: true},
     car3 = {carBrand: 'Honda', price: 12, isAvailableForSale: true}];

     const newCar = (car) => {

       car[2] = {carBrand: 'Toyota', price: 13, isAvailableForSale: true};
       console.log(car);
   }
   newCar(carList);

     //тут додано третє авто
     let carList = [car1 = {carBrand: 'Audi', price: 10, isAvailableForSale: false}, 
     car2 = {carBrand: 'BMV', price: 11, isAvailableForSale: true},
     car3 = {carBrand: 'Honda', price: 12, isAvailableForSale: true}];

     const newCar = (car) => {

       car[3] = {carBrand: 'Toyota', price: 13, isAvailableForSale: true};
       console.log(car);
   }
   newCar(carList);

   //7
   const myObject = {
     key1: true,
     key3: 10,
     key0: 'abc',
     key4: null,
     key10: NaN,
  };


const property = (object) =>{
//console.log(Object.keys(object))- відібражає параметри які є в об'єкті тобто ключі без значення
//has own property перевіряє чи є вказана в дужках властивість у об'єкта тобто чи має object властивість "key3"
if (object.hasOwnProperty("key3") && object.hasOwnProperty("key10")) {
 console.log(object.key3, object.key10);
} else {
 if (object.hasOwnProperty("key3")) {
   console.log(object.key3);
 } else if(object.hasOwnProperty("key10")) {
   console.log(object.key10);
 } else {
   console.log(`There is no key3 or key10, check all the data - ${Object.keys(object)} `);
 }
}
}
property(myObject);

//8
const products = [
 { productId: 1355, name: 'phone' },
 { productId: 5131, name: 'laptop' },
 { productId: 6134, name: 'tablet' },
];

const findProductById = (products, id)=>{
 //создаем пустой массив в который будут записываться искомые свойства объектов
let newlist =[];
for(const product of products){
if(product.productId == id ) newlist.push(product);
else(console.log('undefined'));
}
//декомпозирование
const newlist1 = Object.entries(newlist[0]);
newlist1.forEach (([key, value]) => {
 console.table(key, value);
});
return newlist1;

};
console.log(findProductById(products,1355 ));

//second variation
const products = [
 { productId: 1355, name: 'phone' },
 { productId: 5131, name: 'laptop' },
 { productId: 6134, name: 'tablet' },
];

const findProductById = (products, id) => {

 return products.find((element) =>  element.productId == id );

}
console.log(findProductById(products, 1355 ));


//9
/** ЗАВДАННЯ 9
*
* 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
*
* 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
*
* 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
*
* 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
*
* 5. Якщо масив не відсортований - повернути "Масив не відсортований"
*/

/*  const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

console.log(arraySortInfo(a)) // Деякі елементи не є числами
console.log(arraySortInfo(b)) // Масив відсортований за зростанням
console.log(arraySortInfo(c)) // Масив відсортований за спаданням
console.log(arraySortInfo(d)) // Масив не відсортований */

/**
 * ПІДКАЗКИ
 *
 * Підказка 1: Використовуйте метод масивів "every"
 * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
 * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
 */

const a = [5, 'abc', 10, 1];//не є числом
const b = [4, 10, 14, 25, 25, 50]//зростання
const c = [150, 132, 80, 40]//спаданням
const d = [15, 26, 10, 23, 85]//не відсортований

const isDescendingArray = (inputArray) => inputArray.every((element,index) => {
 let previousElement = inputArray[index - 1];
 if (index > 0){
   //element порівнюється з іншим елементом масиву до якого звертаємось вказуючи що індекс цього елементу буде меншим на одиницю
   return element <= inputArray[index - 1];//(return element <= previousElement)
 }else{
   return true// цей  else стосується першого іf і каже що все що не підпадає під умови (index > 0) if  буде тру
 }
})

const isAscendingArray = (inputArray) => inputArray.every((element,index) => {
 if (index > 0){
   return element >= inputArray[index - 1];
 }else{
   return true
 }

})
// функція some перевіряє чи хочаб один елемент масиву буде строкою
const isString = (inputArray) => inputArray.some((element) => {
 
   return typeof element == 'string';

})
// основна функція в якій вкладені всі попередні і якщо результати цих вкладених функцій = тру то ця функція поверне значення
const arraySortInfo = (inputArray)=> {

if(isString(inputArray)){ 

 return "Деякі елементи не є числами"
}

if(isDescendingArray(inputArray)){

 
 
   return "Массив відсортован по спаданню"
}

 

 if(isAscendingArray(inputArray)){

 
   return "Массив отсортирован по возрастанию"
 }
   
   return"Масив не відсортований"  
}

console.log(arraySortInfo(a))
console.log(arraySortInfo(b))
console.log(arraySortInfo(c))
console.log(arraySortInfo(d))

 