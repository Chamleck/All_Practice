//Вопросы для automation на собеседованиях
//1. 
let num = 2;
let num1 = 2;
if (num > 1 && num1 < 3) {
    console.log('Both numbers are 2')
} else if (num > 10) {
    console.log('num is more then 10')
} else {
    console.log('Some of numbers is not 2')
};
//Тернарный оператор
//2.
//в первых скобках условие после занак ? то что происходит если условие соблюдено
//после : то что происходит если условие не соблюдено
(num===50) ? console.log('ok') : console.log('error');

//развернуть массив задом наперед
let myArr= ['One','Two', 'Three'];
//slice() creates a shallow copy of the original array myArr and then reverse() 
//is called on the new copy, leaving the original array myArr unchanged.
let reversedArr = myArr.slice().reverse();
console.log(myArr); // Output: ["One", "Two", "Three"]
console.log(reversedArr); // Output: ["Three", "Two", "One"]

//заменить ппервый элемент массива на последний
let arr = [1, 2, 3, 4, 5];
//так как длинна массива 5 а индекс массива который нужно поставить вместо первого
//равен 4 то мы онимаем от длины массива единицу
arr[0] = arr[arr.length - 1];
console.log(arr.length);
console.log(arr); // Output: [5, 2, 3, 4, 5]

