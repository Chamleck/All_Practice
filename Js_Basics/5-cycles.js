let num = 80;

while(num<90){
    console.log(num)
    num++;
}


let num1 = 80;
do{
    console.log(num1)
    num1++;
} while (num1<90)


let num2 =11;
for(let i = 1; i < num2; i++){
    console.log(num2)
}

number =10;

for(let i = 1; i < 8; i++){
    if(number === 15){
        break;
    }
    console.log(number);
    number++;
}

for(let i = 1; i < 8; i++){
    if(i === 4){

        continue;
    }
    console.log(i);
    
};

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`)
    }
}