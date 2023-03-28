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
(num === 50) ? console.log('ok'): console.log('error');

//развернуть массив задом наперед
let myArr = ['One', 'Two', 'Three'];
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

let arr = [1, 2, 3, 4, 5];

// Поменять первый и последний элемент массива местами
//Создаем переменную которая будет временно удерживать первый элемент массива по скольку дальше мы присвоим первому элементу массива значение последнего
//по этому просто присвоить предыдущее значение первого элемента последнему элемента не сможем так как он уже будет изменен
let temp = arr[0];
//берем первы элемент массива и последний и присваиваем первоме элементу последний а последнему присваиваем переменную temp которая содержит первый элемент массива
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], temp];

console.log(arr); // Output: [5, 2, 3, 4, 1]

//или так 
let arr = [1, 2, 3, 4, 5];
let temp1 = arr[0]; // Store the first element in a temporary variable
arr[0] = arr[arr.length - 1]; // Assign the last element to the first position
arr[arr.length - 1] = temp1; // Assign the temporary variable to the last position
console.log(arr); // Output: [5, 2, 3, 4, 1]

//пример перебирания массива статистики в функции и возврата нового массива с измененными значениями
export function changeValues() {
    //повертає в statistics результат перебирання за допомогою команди .map
    //тобто підставляє в item.value (ітем це кожен об'єкт в масиві в якому береться ключ .value)
    //потім повертє кожен саме змінений item; тому що ми його міняли, потім результат ціє
    //функції використовується в іншій як аргумент щоб підставити новий statistics в мок
    return statistics.map(item => {

        const randomNumer = faker.datatype.number(9);

        item.value = randomNumer;

        return item;
    })

};

export function mockStatistics(data) {

    cy.intercept('GET', '**/mail-statistics', data);
    cy.reload();

    // for (var statistic of statistics) {

    //     let number = faker.datatype.number(9)

    //     if (statistic.value == 0) {

    //         statistic.value = number
    //         arr.push(number)

    //     }
    // };
    //cy.log(JSON.stringify(arr))
    //створює массив з всіма ключами які є в обєкті        
    //Object.keys(statistic)
    //функція мап в дужках містить аргумент item який відповідає об'єкту в масиві
    //map мап бере кожен об'єк в масиві окремо та перебирає його, в фігурних дужках
    //ми присвоюємо ключу value який знаходиться в кожному перебраному об'єкті значення 3 
    /*let newarry= statistics.map((item)=>{
      item.value=3
    })*/
};
export function mockStatistics(data) {

    //пример создания мока
    cy.intercept('GET', '**/mail-statistics', data);
    cy.reload();

    // for (var statistic of statistics) {

    //     let number = faker.datatype.number(9)

    //     if (statistic.value == 0) {

    //         statistic.value = number
    //         arr.push(number)

    //     }
    // };
    //cy.log(JSON.stringify(arr))
    //створює массив з всіма ключами які є в обєкті        
    //Object.keys(statistic)
    //функція мап в дужках містить аргумент item який відповідає об'єкту в масиві
    //map мап бере кожен об'єк в масиві окремо та перебирає його, в фігурних дужках
    //ми присвоюємо ключу value який знаходиться в кожному перебраному об'єкті значення 3 
    /*let newarry= statistics.map((item)=>{
      item.value=3
    })*/
};

//пример вытягивания айди из запроса с помошью intercept а затем использования этого айди в следующих тестах
describe("Templates", function () {

    before(() => {

        cy.login('testId')
    })

    it("Создание темплейта", () => {
        cy.login('testId')
        cy.visit('https://emails-dev.alpha-pram.com/');
        mainPage.openTemplatesPage();
        templatesPage.getDefaultTemplate().should('exist');
        templatesPage.addNewTemplate();
        //перехоплюємо запит який буде містити айді темплейту у респонсі і передаємо
        //його далі за допомогою .as('id') під id розуміється весь респонс
        cy.intercept('POST', '**/templates').as('id')
        templateEditorPage.createTemplate('abc123', 'Custom');
        templatesPage.getCustomTemplate('Custom').should('exist');
        //чекаємо коли з'явиться наш запит .then беремо цей реквест
        //і дістаємо з нього що потрібно , тільки через cy.wait можна дістати
        //з інтерсепту тіло респонсу   
        cy.wait('@id').then((request) => {
            cy.log(JSON.stringify(request.response.body.id))
            let id = request.response.body.id
            // cy.task('setMyUniqueId', id)
            cy.setId(id)
        })
    });



    it("Открытие созданного темплейта", () => {
        cy.login('testId')
        //команди по збереженню змінної та передачї її в інше місце працюють тільки 
        // з .then мабуть тому що пов'язано з резолвом промісу
        cy.getId().then((id) => {
            // cy.task('getMyUniqueId').then((id)=>{
            cy.visit(`https://emails-dev.alpha-pram.com/templates/${id}`)
            templatesPage.getCustomTemplate('Custom').should('exist');
            templatesPage.editTemplate('Custom');
            templateEditorPage.unwarpHeader();
            // })
        })
    })
})

//пример функции логина через апи с сохранением в сессию
export function loginSessionViaAPI(id, username = 'admin@gmail.com', password = 'vI3iT581Lrh&') {
    //создаем объект который называем requestBody в этом объекте есть значение user: в котором хранится еще один объект с пустыми email: и password:
    let requestBody = {
        email: "",
        password: ""
    };
    //тут обращаемся к значению email в созданной переменной requestBody и задаем значение из аргумента функции
    requestBody.email = username;
    requestBody.password = password;

    //тут делаем реквест с методом POST, с эндпоинтом /api/users/login и с нашим объектом который хранится в переменной requestBody
    cy.session(id, () => {
        cy.request('POST', 'https://emails-dev-api.alpha-pram.com/user/auth/login', requestBody).then(response => {

            // тут создаем переменную token которая получит значение из тела ответа в котором у юзера есть еще токен
            let token = response.body.accessToken;
            // сетим этот токен в localStorage
            window.localStorage.setItem('accessToken', token)

            // командой window обращаемся к localStorage, командой setItem в скобках указываем ключ и значение которое из джейсона преобразуем в строку
            window.localStorage.setItem('storeId', sessionData.storeId);
        }), {
            //вмикаэмо налаштування щоб кеш зберігався поміж сесіями
            cacheAcrossSpecs: true,
        }
    })
};
//сортировка продуктов по бабл сорту по возростанию
let items = [{
        name: 'Item A',
        price: 20
    },
    {
        name: 'Item B',
        price: 10
    },
    {
        name: 'Item C',
        price: 30
    },
    {
        name: 'Item D',
        price: 5
    },
    {
        name: 'Item E',
        price: 15
    }
];

// Define the bubble sort algorithm
function bubbleSort(items) {
    let len = items.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (items[j].price > items[j + 1].price) {
                let temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
            }
        }
    }
    return items;
}

// Call the bubble sort algorithm on the items array and print the sorted array
console.log(bubbleSort(items));

//Способ сортировки с использованием метода sort() и функции в нем которая сравнивает один элемент массива с другим
//Этот код сортирует массив элементов в порядке возрастания на основе свойства цены, используя метод sort() и функцию сравнения. 
//Функция сравнения принимает два параметра a и b, которые представляют два соседних элемента в массиве. 
//Функция возвращает отрицательное значение, если a должно стоять перед b, и положительное значение, если b должно стоять перед a. 
//Если два значения равны, функция возвращает 0.
//если нужно отсортировать по убыванию то можно просто поменять а и b местами
let items3 = [{
    name: 'Item A',
    price: 20
}, {
    name: 'Item B',
    price: 10
}, {
    name: 'Item C',
    price: 30
}, {
    name: 'Item D',
    price: 5
}, {
    name: 'Item E',
    price: 15
}];

items3.sort((a, b) => a.price - b.price);

console.log(items3);

//сортировка по квик сорту
let items4 = [{
    name: 'Item A',
    price: 20
}, {
    name: 'Item B',
    price: 10
}, {
    name: 'Item C',
    price: 30
}, {
    name: 'Item D',
    price: 5
}, {
    name: 'Item E',
    price: 15
}];

//квиксорт тип сортировки
//В этой реализации функция quickSort() принимает элементы массива в качестве аргумента и рекурсивно разбивает массив на два подмассива
//на основе выбранного опорного элемента. Поворотный элемент выбирается первым элементом массива.
//Затем функция сравнивает каждый элемент массива с опорным элементом и помещает их либо в левый подмассив, либо в правый подмассив, 
//в зависимости от того, меньше они или больше опорного элемента.
//Затем функция возвращает конкатенированный результат вызова quickSort() для левого подмассива, добавления элемента pivot обратно в массив
//и вызова quickSort() для правого подмассива. Эта реализация сортирует массив элементов в порядке возрастания на основе свойства цены. 
//Если вы хотите отсортировать массив в порядке убывания, вы можете изменить оператор сравнения на > вместо < в операторе if, 
//который проверяет, должен ли элемент находиться в левом подмассиве или в правом подмассиве.
function quickSort(items) {
    if (items.length <= 1) {
        return items;
    }

    const pivot = items[0].price;
    const left = [];
    const right = [];

    for (let i = 1; i < items.length; i++) {
        if (items[i].price < pivot) {
            left.push(items[i]);
        } else {
            right.push(items[i]);
        }
    }
    //повертаємо конкатинований масив який складається із двох підмасивів та опорним елементом
    return [
        ...quickSort(left),
        {
            name: items[0].name,
            price: pivot
        },
        ...quickSort(right),
    ];
}
console.log(quickSort(items4));

//задание переработать этот массив с числами в объект в котором будет обозначено максимальное число, минимальное и среднее
let arr = [1, 5, 2, 7, 3];

function sort(arr){
//проверка того что массив должен иметь больше чем одно значение, в противном случае его не нужно сортировать.
    if(arr.length <= 1){
        return arr;
    }
    let obj = {};
    let sorted = arr.sort((a, b) => a - b);
    obj.min = sorted[0];
    obj.max = sorted[sorted.length-1];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
//написать += это то же самое что sum = sum + arr[i] то есть мы присваиваем переменной sum новое значение каждую итерацию
//сначала сумма равно нулю, потом она будет равняться 0 + первый елемент массива, затем во второй итерации она будет
//ровняться уже 0 + первый елемент массива + второй элемент массива и так далее, пока не сложаться все значения в массиве и 
//в конце цикла мы получим сумму всех значений
    sum += arr[i];
    }
//вычисляем среднее арефметическое сумму всех числе делим на их количество в массиве ну и этот результат присваивается
//как новый ключ и значение к нашему пустому объекту
    obj.aver = sum/sorted.length;
    return obj;
}
console.log(sort(arr));

//нужно выбрать из массива четные значения и отсортировать их
let arr = [4, 7, 2, 9, 8];

const selectEven = (arr) => {
    let evenArr = [];
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i]) && arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }
    let sortedArr = evenArr.sort((a,b) => b-a);
    return sortedArr;
}

console.log(selectEven(arr)); // Output: [8, 4, 2]
