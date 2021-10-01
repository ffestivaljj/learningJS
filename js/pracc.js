"use strict";

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a:55,
//     b:12
// };

// // const copy = obj;

// // copy.a = 10;
// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         a: 7,
//         b: 3
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 111;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d:14,
//     e:20
// };

// const clone = Object.assign({},add);
// clone.d = 20;
// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasd';
// console.log(newArray);
// console.log(oldArray);

// const video = ['yt', 'vimeo', 'rutube'],
//         blogs = ['wp', 'lj', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// const arr = [1, 80, 2, 4, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a-b;
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} vnutri massiva ${arr}`);
// });


// console.log(arr.length);
// arr[99] = 123;
// console.log(arr.length);
// console.log(arr);
// arr.pop();

// arr.push(5);
// console.log(arr);

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const str = prompt("","");
// const products = str.split(" ");
// products.sort();
// console.log(products.join('; '));

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier);

// // const jonh = {
// //     health: 100
// // };

// // Object.setPrototypeOf(jonh, soldier);

// jonh.sayHello();