//-----------------------------------------------------------------------------------------------
//                   H O M E W O R K _ 3
//-----------------------------------------------------------------------------------------------

// 1) створити функцію яка приймає масив та виводить його
//
// let array = [3, 10, 43, 53, 67, 1005, 54, 2, 0, 476];
//
// function showArray(arr) {
//     console.log(arr);{
//         for (const arrElement of arr) {
//             console.log(arrElement);
//         }
//     }
// }
//
// showArray(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
//
// function createArray(length,min,max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//       array.push(Math.floor(Math.random() * (max - min) + min))
//     }
//     return array;
// }
// const array1 = createArray(10, 10, 100);
// console.log(array1);


// Для виведення використати попередню функцію.
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnMinFromThree(a, b, c) {
//     let min;
//
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= a && c <= b) min = c;
//    console.log('min', min);
//    return min;
// }
// const min = returnMinFromThree(1000,200,60);
// console.log(`------------------------------------`);
// console.log(min);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function returnMaxFromThree (a, b, c) {
//     let max;
//
//     if (a >= b && a >= c) max = a;
//     if (b >= a && b >= c) max = b;
//     if (c >= a && c >= b) max = c;
//
//     console.log('max', max);
//     return max;
// }
// const max = returnMaxFromThree(100,20,600);
// console.log(`--------------------------------`);
// console.log(max);


// 5) створити функцію яка повертає найбільше число з масиву
//
// const myFunck = (array) => {
//     let max = array[0];
//     for (const element of array) {
//         if (max < element) max = element;
//     }
// return max;
// }
// const myFunckOfMax = myFunck ([-100, 37, 567, 3, -20, 10000]);
// console.log(myFunckOfMax);
//
// console.log(`-------------------------------------------------------`);


// 6) створити функцію яка повертає найменьше число з масиву
//
// const myNewFunck = (array1) => {
//     let min = array1[0];
//     for (const item of array1) {
//         if(min > item) min = item;
//     }
//     return min;
// }
//
// let myFunckOfMin = myNewFunck ([-2002, 5, -34, 547, 758, 0]);
// console.log(myFunckOfMin);
//
// console.log(`-------------------------------------------------------`);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// function sum (array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// }
//
// let sum1 = sum([10, 20, 30])
// console.log(sum1);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function average (array) {
//     let sum = 0;
//     for (const element of array) {
//       sum = sum + element;
//     }
//     return sum/array.length;
// }
//
// const average1 = average ([10, 20, 30, 40, 20]);
// console.log(average1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let arrayOfObjects = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
// const findFields = (array) => {
//     let result = [];
//     for (const obj of array) {
//         for (const key in obj) {
//             result.push(key);
//         }
//     }
//     return result;
// }
// console.log(findFields(arrayOfObjects));
//
// console.log(`----------------------------------------------------`)


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let arrayofObjects = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
//
// const findValue = (array) => {
//     let result = [];
//     for (const obj of array) {
//         for (const key in obj) {
//             result.push(obj[key]);
//         }
//     }
//     return result;
// }
//
// console.log(findValue(arrayofObjects));


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// const splitArray = (arr1, arr2) => {
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i] + arr2[i]);
//     }
//    return newArray;
// }
// console.log(splitArray([1, 2, 3, 4], [2, 3, 4, 5]))


//----------------------------------------------------------------------------------------------------------
//                                         C L A S S W O R K                                              //
//----------------------------------------------------------------------------------------------------------

// - створити функцію, що виводить масив
//
// let arr = [33, 5, 60, 0, 43, 1, 84];
//
// function showArr(array) {
//     console.log(array);
//     {
//         for (const arrayElement of array) {
//             console.log(arrayElement);
//         }
//     }
// }
//
// showArr(arr);

// - створити функцію яка обчислює та повертає площу прямокутника висотою
//
// function result (length,width) {
//     square = 0;
//     for (const element of arguments)  {
//         square = length * width;
//     }
//     console.log(square);
//     return square;
// }
//  result (5, 10);

// - створити функцію яка обчислює та повертає площу кола  // S = P * r*r
//
// function squareOfCircle (r) {
//     let square = 0;
//     let P = 3.14;
//     for (const argument of arguments) {
//         square = P * r*r;
//     }
//     console.log(square);
//     return square;
// }
// squareOfCircle(3);
//

// - створити функцію яка обчислює та повертає площу циліндру
//
// function squareOfTube (r, height) {
//     let square = 0;
//     let P = 3.14;
//     for (const argument of arguments) {
//         square = P * r*r * height;
//     }
//     console.log(square);
//     return square;
// }
// squareOfTube(3, 5);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
//
// function  numberMinMax () {
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (const item of arguments) {
//         if(item > max) max = item;
//         if(item < min) min = item;
//     }
//     console.log('max', max);
//     return min;
// }
// const min = numberMinMax(3, 75, 7, 28, 600, 2, -100);
// console.log(`--------------------------------------------`);
// console.log(min);


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
//
// let array1 = [9,8,0,4];
//
// function changeElement(arr,index) {
//
//     let array = [...arr];
//     if(index < array.length-1) {
//         let temp =array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }
//     return array;
// }
// const changeElement1 = changeElement(array1, 0);
// const changeElement2 = changeElement(array1, 1);
// const changeElement3 = changeElement(array1, 2);
//
//
// console.log(array1);
// console.log(changeElement1);
// console.log(`------------------------------------------------`);
// console.log(array1);
// console.log(changeElement2);
// console.log(`------------------------------------------------`);
// console.log(array1);
// console.log(changeElement3);
//


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому
// порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function myFunck(array) {
//     let zero = [];
//     let number = [];
//     for (const item of array) {
//         if (item === 0) {
//             zero.push(0);
//         } else {
//             number.push(item);
//         }
//     }
//     // return number.concat(zero);
//     return [...number,...zero];
// }
//
// console.log(myFunck([1, 0, 6, 0, 3]));
// console.log(myFunck([0, 1, 2, 3, 4]));
// console.log(myFunck([0, 0, 1, 0]));
//
//                        OR
//
// function myFunck(array) {
//     let tempArray = [...array];
//
//     for (
//         let i = tempArray.length - 1;
//         i >= 0;
//         i--
//     ) {
//         if (tempArray[i] === 0) {
//             tempArray.splice(i, 1);
//             tempArray.push(0);
//         }
//     }
//     return tempArray;
// }
//
// console.log(myFunck([1, 0, 6, 0, 3]));
// console.log(myFunck([0, 1, 2, 3, 4]));
// console.log(myFunck([0, 0, 1, 0]));

//=======================================================================================================
// Задача від Віті:

// - Дано список імен.
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

const normalize = (str) => {
    return str
        .split(' ')
        .filter(x => {
                if(x.length > 0) {
                    return true
                } else {
                    return false
                }
        })
        .join(' ')
}

console.log(normalize(n1));
console.log(normalize(n2));
console.log(normalize(n2));


//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
