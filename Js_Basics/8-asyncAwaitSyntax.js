async function asyncFunc(){
    return 'text from async function'
}

console.log(asyncFunc())

// function asyncFunc(){
//     await <someAction>
// }

const asyncFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Text from async function')
            resolve()
        }, 3000)
        
    })
}


const asyncFunction = async () => {
    console.log('Start');
    await asyncFunc();
    console.log('End')
}

asyncFunction();