// let s = prompt();
//
// if (s){
//     console.log('urrraaaa!!!!!');
// } else {
//     console.log('empty!');
// }


// Детальніше про true false

// console.log(5 > 6);
// console.log(5 < 6);
// let a = 100;
// let b = 200;
// console.log(a > b); // false
// 'adasdada'.startsWith('ad'); // true


// console.log(!!' '); // true
// console.log(!!''); // false
// console.log(!!0); // false
// console.log(!!'0'); // true
// console.log(!!-10); // true
// console.log(!!null); // false
// let x;
// console.log(!!undefined); // false
// console.log(!!NaN); // false
// console.log(!![]);// true
// console.log(!![].length);// false
// console.log(!!{});// true


// let s = +prompt() || 'xxx';
// console.log(s);

// if (s === null || s === undefined || s === NaN) {
// 	s = 'xxx';
// }


// s = null -> !!null-> falsse -> s = false
// if (s) {
// 	console.log('ura!!!');
// } else {
// 	console.log('empty');
// }

/* Як вивести певну кількість div з довільним текстом і індексом? Що таке індекс взагалі?*/

//            0  1  2  3
// let arr = [a, b, c, d];

// for (let i = 0; i < 8; i++) {
// 	document.write(`<div>adfsagdf ${i}</div>`);
// }


/*
    Як вивести поточний номер кроку цикла, парні/непарні кроки? || расскажите про вывод парных чисел через цикл.
    почему нужно делить на 0 и тд.?
    Як з масиву чисел вивести тільки парні?
*/


// for (let i = 0; i < 8; i++) {
//
// 	if (i % 2 === 0 && i !== 0) {
// 		document.write(`<div>поточний номер кроку -  ${i}</div>`);
//
// 	}
// }

// let nums = [11, 22, 33, 44, 123, 213, 243, 34];
// for (let i = 0; i < nums.length; i++) {
//
// 	let currentNumInArray = nums[i];
//
// 	// if (currentNumInArray % 2 === 0) {
// 	// 	console.log(currentNumInArray);
// 	// }
//
//
// 	if (!(currentNumInArray % 2)) {
// 		console.log(currentNumInArray);
// 	}
//
// }

// for (let i = 0; i < nums.length; i++) {
// 	let index = i;
// 	// let isIndexEven = i % 2 === 0;
// 	let isIndexEven = !!!(i % 2);
// 	if (isIndexEven && i !== 0) {
// 		console.log(nums[i]);
// 	}
//
//
// }


/* Як з масиву вивести за допомогою if , typeof конкретні елементи (булеві, числові)?*/
// let solyanka = [1, 2, 'ads', true, [], {}, 'qwe', [1, 2, 3], {name: 'vasya'}];
//
// for (const solyankaElement of solyanka) {
// 	if (typeof solyankaElement === 'object') {
// 		console.log(solyankaElement);
// 	}
//
//
// }


/*
    Як за допомогою цикла скопіювати дані з одного масива в інший,який є пустим?
    в якому випадку consol.log включається в цикл і виводиться за його межі?
*/

// let emptyArr = [];
// let nums = [11, 22, 33, 44];
// // for (let i = 0; i < nums.length; i++) {
// // 	// emptyArr[i] = nums[i];
// //     emptyArr.push(nums[i])
// // }
//
// for (const num of nums) {
// 	emptyArr.push(num);
// }
// console.log(emptyArr);

/* Вивести за допомогою console.log кожен третій елемен тільки якщо значення елемент є парним. */
// let nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// for (let i = 0; i < nums.length; i++) {
// 	let elementValue = nums[i];
// 	if (!(i % 3) && !(elementValue % 2)) {
// 		console.log(elementValue);
// 	}
// }


/*покажіть приклади циклу в циклі || Про for of цикл в циклі*/


// let simpsons = [
// 	{
// 		name: 'Bart',
// 		surname: 'Simpson',
// 		age: 10,
// 		info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
// 		photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png',
// 		says: ['ay karamba', 'el barto', 'eat my shorts']
// 	},
// 	{
// 		name: 'Homer',
// 		surname: 'Simpson',
// 		age: 40,
// 		info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
// 		photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
// 		says: ['dope', 'beer', 'ouch', 'ay']
// 	},
// ];
//
//
// for (const simpson of simpsons) {
// 	document.write(`
//         <div>
//             <h2>${simpson.name} ${simpson.surname}. ${simpson.age}</h2>
//             <img src="${simpson.photo}" alt="">
//             <p>${simpson.info}</p>
//             <ul>`
// 	);
//
// 	for (const phrase of simpson.says) {
// 		document.write(`<li>${phrase}</li>`);
//
// 	}
// 	document.write(`
//             </ul>
//         </div>`);
// }

// for (const simpson of simpsons) {
// 	if (true) {
// 		break;
// 	}
// }


/*яка є фукнція яка викликає рандомні масиви*/
let randomNumber = Math.random() * 100; /*0... 0.5 ....99.9999*/
let roundRandomNumber = Math.round(randomNumber);
console.log(roundRandomNumber);


/*можна ще розгорнутіше про return у функціях?*/

// x=f(y)

// let x = 10;
// let x = function (y) { return y*2;}(5);
// let x = () => {return 10;}();


// function calculator(a, b) {
// 	return a + b;
// }

//// calculator(10, 20); // error
// let calculator = function (a, b) {
// 	return a + b;
// };
// calculator(10, 20);

// let calculator = (a, b) => {
// 	return a + b;
// };
// calculator(10, 20);


// let calculator = (a, b) =>  a + b;
// calculator(10, 20);

// let calculator = (a, b) => {
// 	console.log(a + b);
// 	return a + b;
// };


// let user = {name: 'vasya', age: 31, status: true, skills: ['js', 'html']};
//
// let name = user.name;
// let age = user.age;
// let status = user.status;
// let skills = user.skills;

// let name = 'adsjhgasdhgf';
// let {name: xxx, age, status, skills} = user;
// console.log(xxx, age, status, skills);

// let coords = {lat: 10, lng: 20};
// function printCoords({lat, lng}) {
// 	console.log(lat, lng);
// }
// printCoords(coords);


// let x = 100;
// let y = 200;
// let coords = {x, y};
// console.log(coords);

// let person = {name: 'vasya'};/*ydt63426hsdfh*/
//
// console.log(person);
// let person2 = person; /*ydt63426hsdfh*/
// person['xxx'] = 100500;
// console.log(person2);
// console.log(person);
// console.log(person /*ydt63426hsdfh*/ === person2 /*ydt63426hsdfh*/);
//
// let person3 = {...person}; /*khsfdhfs76554654*/
// console.log(person3);
//
// console.log(person/*ydt63426hsdfh*/ === person3 /*khsfdhfs76554654*/);
//
// person3.age = 31;
// console.log(person3);
// console.log(person);
//
// let {name} = person;
// name = 'ashdfahdgfashgdfhasgfd';
// console.log(person);

//
// let nums = [11, 22, 33]; /*asd13*/
// // console.log(nums);
// // console.log(nums[0], nums[1], nums[2]);
// let nums2 = nums; /*asd13*/
// console.log(nums /*asd13*/ === nums2 /*asd13*/);
// let nums3 = [...nums];
// console.log(nums3);
// console.log(nums /*asd13*/ === nums3 /*qwe112313*/);
//
// let arr = [11, 22];
// let [q, e] = [11, 22];
// // let q = arr[0];
// // let e = arr[1];
// console.log(q);
// console.log(e);

