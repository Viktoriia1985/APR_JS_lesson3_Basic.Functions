// let str = 'HELLO WORLD';
//
//
// console.log(str[0]);
//
//
// let s = str.replace('HELLO', 'GOOD BYE');

// let s = str.replaceAll('O', 'X');
// console.log(s);
//
//
//-------------------------------------------------------------------------------------------------------
// let str = 'HELLO WORLD';
// let s = str.slice(0, 5);
//
// console.log(s);
// console.log(str);
//
//
// https://auto.ria.com/uk/search/?&categories.main.id=2&brand.id[0]=179&model.id[0]=55484&country.import.usa.not=-1&price.currency=1&abroad.not=0&custom.not=1&page=0&size=20
//
// let userNames = 'Olga,Ivan,Kristi,Oleg';
//
//
//
// let strings = userNames.split(',');
// console.log(strings);  // отримаємо масив ['Olga','Ivan','Kristi','Oleg']
//
//------------------------------------------------------------------------------------------------------------
// let ages = [26, 19, 10, 16, 28];
//
// let s = ages.join(' !=====! ');
//
// console.log(s);
//
//------------------------------------------------------------------------------------------------------------
// let email = '          victor.fzs@gmail.com'
// let email2 = ' victor.fzs@gmail.com           '
// let email = 'victor.kmin@gmail.com'
// let email2 = 'VICTOR.Kmin@gmail.com'
// console.log(email);
// console.log(email.trim());
// console.log(email2);
// console.log(email2.trim());
// console.log(email);
// console.log(email.toLowerCase());
// console.log(email2);
// console.log(email2.toLowerCase());
//
// console.log(email.trim().toLowerCase() === email2.trim().toLowerCase());
//
// let phone = '+38067693832';
//
// let b = phone.startsWith('+380');
// let b1 = phone.endsWith('+380');
// console.log(b);
// console.log(b1);
//
// let email = 'victor.kmin@gmail.com'
//
// let b = email.includes('@');
// console.log(b)

//-------------------------------------------------------------------------------------------------------------

// FUNCTIONS

// function myFunction(item) {
//     document.write(`I am function with ${item}`)
//     document.write(`<hr>`)
// }
//
// myFunction('bread');
// myFunction('milk');
// myFunction(19);
// myFunction(true);
// myFunction('butter');


// function myFunction(item = '', price = '') {
//   console.log(item)
//   document.write(`I am function with ${item} for ${price}UAH`);
//   document.write('<hr>');
// }
//
// myFunction('Bread', 20);
// myFunction('Eggs')
// myFunction(false)
// myFunction(['Beer', 'Fish', 'Aspirin'])
//
// let arr = [
//   {
//     id: 1,
//     name: 'Karina',
//     age: 15,
//     car: true
//   },
//   {
//     id: 2,
//     name: 'Doma',
//     age: 15,
//     car: true
//   },
//   {
//     id: 3,
//     name: 'Vlad',
//     age: 15,
//     car: true
//   }
// ]
//
// let karina = {
//   id: 1,
//   name: 'Karina',
//   age: 15,
//   car: true
// }
//

// let karina = {
//     name: 'Karina',
//     age: 23
// }
//
// function xxx (user = {}, note = '', phone = '') {
//     console.log('--------------------------------');
//
//     console.log(user);
//     console.log(user.name, user.age, user.gender);;
//     console.log(note);
//     console.log(phone);
// }
//
// xxx ( {name:'Vova', age: 46}, 'it is me' , 'no number');
// xxx ( {name: 'Vika', age: 36, gender: 'female'}, 'Hello from me', '+38066');
// xxx (  {name:'Vasya'}, 'hello', '+38095');
// xxx (karina, 'Hey! I am Karina');
//
//--------------------------------------------------------------------------------------------
//  завдяки функції знайти usera по id
//
// let array = [
//     {id: 1, name: 'Vika', age: 36, car: 'Mazda'},
//     {id: 2, name: 'Vova', age: 46, car:'BMW'},
//     {id: 3, name: 'Bogdan', age: 14},
//
// ]
//
//
// function findUserById (userId) {
//     for (const user of array) {
//         if (user.id === userId) {
//             console.log(user);
//             break;
//         }
//     }
// }
//
// findUserById(2);

//----------------------------------------------------------------------------------------------------------

// function xxx(user = {}, note = '', phone = '') {
//   console.log('_+++++++++++++_');
//   console.log(user);
//   console.log(note);
//   console.log(phone);
//   console.log('_+++++++++++++_');
//
//   console.log('____________')
//   console.log(user.age)
// }
//
// xxx(3);
// xxx(karina, 'Hello user');
// xxx({name: 'Ivan'}, 'Hello ded', '_84328423');
// xxx();
//
//
// function findUserById(userId) {
//   for (const user of arr) {
//     if (user.id === userId) {
//       console.log(user);
//       break;
//     }
//   }
// }
//
//
// findUserById(2)

//---------------------------------------------------------------------------------------------------------
// function someName() {
//
//   // let arguments = 'XX'
//
//   for (const arrgumnt of arguments) {
//     console.log(arrgumnt);
//   }
//   console.log(arguments);
//
// }
//
// someName(2, 'Hello', 'Anton', 17, [9, 0, 1, 1]);
//-------------------------------------------------------------------------------------------------------

// function emailSender() {
//     for (let i = 0; i < arguments.length; i++) {
//         const emailUser = arguments[i];
//         if (!emailUser.includes('@')) {
//             console.log(`email: \n ${emailUser}  - \n is not valid`);
//             continue;
//         }
//
//         document.write(`Welcome ${emailUser}`);
//         document.write(`<hr>`);
//
//     }
// }
//
// emailSender(
//     'vika@gmail.com',
//     'zzzkatyazzz.com',
//     'vova74@gmail.com',
//     'hello_vasya@gmail.com',
//     'hellogmail.com',
// )


// function moneyCalculator(dollars, curs) {
//     console.log('Hello user.')
//     let uah = dollars * curs;
//
//     console.log('Обмінник дав мені->');
//     console.log(uah);
//
//     return uah;
// }
//
// let money = 100000;
//
// let changedMoney = moneyCalculator(2000, 27.4);
//
// money += changedMoney;
//
// console.log(money);


// function sumator(one, two) {
//   let sum = one + two;
//   console.log(sum);
//
//   return one + two
// }
//
//
//
// let reusult = sumator(10, 5);
//
// console.log(`Result is ${reusult}`);
//
// sumator(reusult, 100)
//
//
// function emailValidatpor(email) {
//     if (!email.includes('@')) {
//         return 'Wrong email';
//     }
//
//     return 'Das ist good';
// }
//
// let s = emailValidatpor('2222');
//
// console.log(s);
//
//
// let str = '      Harry         Potter           ' // 'Harry Potter'
// let str1 = '   Hermiona      Volta      ' // 'Hermiona Volta'
// let str2 = '   John      Doe      ' // 'John Doe'


// function nameNormalizator(nameToNormalize) {
    ///
//
//
//
//     return 'Hermiona Volta'
// }
//
// nameNormalizator('      Harry         Potter           ')