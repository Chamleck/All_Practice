//
let a =5;
let b =3;
let c;
c = a + b;
console.log(c);

//some code
a = 8;
b = 12;

console.log(c);

// объявление функции, название функции,(параметры функции в скобках), внутри тела функции сам ее механизм

function sum(a,b){
     let c = a + b;
     console.log(c);
}
let d = 1;
let f =3;
sum(3, 10);
sum(d, f);

function sum2(a,b){
    let c = a + b;
    return с;
}

//console.log(sum2(3, 10));

let num1 = 1;
let num2 = sum2(3, 10);
console.log(num1 + num2)
console.log(num1 + sum2(3, 10));
//анонимные функции
function someNamedFunction(a, b){
    let c = a + b;
    return с;
};

function (a, b){
    let c = a + b;
    return с;
}

const anonimFunc = function (a, b){
    let c = a + b;
    return с;
};

console.log(anonimFunc(1, 2));

//стрелочные функции

const arrowFunc = (a, b) =>{
    let c = a + b;
    return c;
};
console.log(arrowFunc(1, 2));

const funcWithDefaultValue = (a, b) =>{
    return (a*b)
}
console.log(funcWithDefaultValue(2,5))
//можно присваивать значение внутри функции
const funcWithDefaultValue1 = (a, b = 5) =>{
    return (a*b)
}
console.log(funcWithDefaultValue1(2))
//цикл внутри функции который останавливается когда функция будет возвращать итератор равный 6
const playWithReturnFunc = () =>{
    for( let i = 0; i < 10; i++){
        console.log(i);
        if (i===6){
            return
        }
    }
}

playWithReturnFunc();

console.log(Date())

const myRequestWithDate = (field1, addedAt = Date()) => {
       let requestBody = {
        someData1: 1,
        someData2: 2,
        timestamp: ''
       }
       requestBody.someData1 = field1;
       requestBody.timestamp = addedAt;

       return requestBody;
}

console.log(myRequestWithDate('qwqwqwqw'))
console.log(myRequestWithDate('qwqwqwqw', 'qwqwqwqw2'))


console.log(1)
function someFunc(){
    console.log('2')
}

setTimeout(someFunc, 5000)

console.log(3)

function first(){
    setTimeout(function(){
        console.log('first')
    }, 3000)
}

function second(){
    console.log('Second');
}
first();
second();


function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parm1 ${param1}`);
    callbackFunction();
}

someFunctionWithCallback('123', function(){
    console.log('Here is log of callback func')
})

function it(testDescription, testActions){
    console.log(`test descr: ${testDescription}`)
    testActions();
}

it('Search in google',()=>{

} )
//можно вызывать и до объявления функции
sum22(1, 2);

function sum22(a,b){
    let c = a + b;
    console.log(c);
}
//стрелочная функция заработает если ее вызывают послее ее объявления
const sum333 = (a, b) => {
    let c = a + b;
    console.log(c);
}
sum333(1, 2);