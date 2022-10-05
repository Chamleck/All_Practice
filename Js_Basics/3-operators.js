//конкатинация то есть склеивание с помощью плюса
console.log('arr' + '-object')
//сложение
console.log(2+2)
//текс и цифра
console.log('2'+ 2)
//сложение
console.log(2+ + '2')

let incr = 10,
    decr = 10
//инкремент / увеличение
    incr++;
//декремент /понижение   
    decr--;

    console.log(incr)
    console.log(decr)
//постфиксная форма инкремента
    console.log(++incr)
    console.log(--decr)
//префиксная форма инкремента
    console.log(incr++)
    console.log(decr--)
//операции сравнения
    console.log(5<2)
    console.log(5>2)
//меньше или равно
    console.log(5<=2)
//больше или равно    
    console.log(5>=2)
//обычное равенство
    console.log(5==2)
//
     console.log(5===2)
//не равно
     console.log(2!==2)

     console.log('2'!== 2)

// && операторы оба значения тру

let isChecked = true,
    isClosed = true;

    console.log(isChecked && isClosed);

// || одно из условий тру 
console.log(isChecked || isClosed);

//оператор заперечення переделывает на противоположное значение
console.log(isChecked && !isClosed);
//если есть и бургер и картоха то окей и все тру если чтото не тру то все не тру
const hamburger = true;
const fries = true;

console.log(hamburger&&fries)

const hamburger1 = 5;
const fries1 = 0;

if(hamburger1&&fries1)
{
    console.log('я ситый')
}

//null, '', undefined, 0, NaN - всегда false

// мы хотим скушать или 3 гамбургера и 1 колу или 2 пории нагетсов и две картошки
const hamburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cola = 1;

if(hamburger2 >= 3 && cola||naggets >= 2 && fries2 >= 2){console.log('я ситий')};


