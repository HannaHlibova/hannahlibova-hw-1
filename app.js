// TASK 1
// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  let multiple = 1;
  
  for (let i= 0; i < arguments.length ; i++) {
    multiple *= arguments[i];
  }
  
  if (!arguments.length) {
    multiple = 0;
  }
  
  return multiple;
}

multiply(4, 7);



// TASK 2
// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) 
// “tset”.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('zxcvb');



// TASK 3
// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
//где каждый символ разделен пробелом и заменен на юникод-значение символа: 
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 
//подсказка: для получения кода используйте JavaScript String charCodeAt() Method 

function getCodeStringFromText(str){
  const arr = [];
  let charCode,
    newStr;
  
  for (let i = 0; i < str.length ; i++) {
    charCode = str.charCodeAt(i);
    arr.push(charCode);
  }
  
  newStr = arr.join(' ');
  
  return newStr;
}

getCodeStringFromText('hello');



// TASK 4
// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” 
// если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(num) {
  if ( num > 0 && num <=10 ) {
    let randomNum = getRandomInRange(1, 10);
    
    if ( num === randomNum ) {
      return "Вы выиграли";
    } else {
      return "Вы не угадали ваше число " + num + " а выпало число " + randomNum;
    }
  }
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max-min + 1)) + 1;
}

guessNumber(2);


// TASK 5
//Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(x){
  const arr = [];
  
  for (let i = 1; i <= x; i++) {
    arr.push(i);
  }
  
  return arr;
}

getArray(8);



// TASK 6
// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  let newArr = arr.concat(arr);
  return newArr;
}

doubleArray( [1, 2, 3] );



// TASK 7
// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
// а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
  }
  
  return arguments;
}

changeCollection( [1,2,3], ['a', 'b', 'c'], [0, 0, 0] );



// TASK 8
// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. 
// Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

const users = [
  {
    name: "Nik",
    age: 30,
    gender: "male"
  },
  {
    name: "Nika",
    age: 28,
    gender: "female"
  },
  {
    name: "Alex",
    age: 28,
    gender: "male"
  },
  {
    name: "Kate",
    age: 25,
    gender: "female"
  }
]

let genderArr;

function funcGetUsers(users, objKey, objValue) {
  if(users && objKey && objValue) {
    return genderArr = users.filter(user => user[objKey] === objValue);
  }
}

funcGetUsers(users, 'gender', 'male');
