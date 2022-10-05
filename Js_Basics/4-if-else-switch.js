if(9==9)
{
    console.log('result')
};

// мы хотим скушать или 3 гамбургера и 1 колу или 2 пории нагетсов и две картошки
const hamburger2 = 5;
const fries2 = 1;
const naggets = 1;
const cola = 1;

if(hamburger2 >= 3 && cola||naggets >= 2 && fries2 >= 2)
{console.log('я ситий')}
else{console.log('Я еще голоден')};

//вложенные условия

let num =50;
if(num<49){console.log('меньше49')}
else if(num>100){console.log('Больше 100')}
else{console.log('ok')};

//тернарный оператор
(num===50) ? console.log('ok') : console.log ('error')

let number = 50;

switch(number){
    case 49:
        console.log('наше значение 49')
        break;
    case 50:
        console.log('наше значение 50')
        break;
    case 51:
        console.log('наше значение 51')
        break;
    case 52:
        console.log('наше значение 52')
        break;
}