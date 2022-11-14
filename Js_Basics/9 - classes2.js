class Parent{

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.lastName = "Sanitarskyi"
    }

    tellName(){
        console.log(`My name is ${this.name} ${this.lastName}`)
        // console.log('My name is' + this.name + this.lastName)
    }

    tellAge(){
        console.log(`My age is ${this.age}`)
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log(`I don't work!`)
        }else{
            this.job = "QA";
            console.log(`My job title is ${this.job}`)
        }
    }
}

class Child extends Parent {

    goToSchool(){
        console.log('I like to go to school!')
    }
}


const parent = new Parent('Dmytro', 28);
const child = new Child('Sofia', 5);


// console.log(parent)
// console.log(child)

parent.tellName()
parent.tellAge()
parent.tellJobTitle()

child.tellName()
child.tellAge()
child.tellJobTitle()
child.goToSchool()
