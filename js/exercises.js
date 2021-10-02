"use strict";

//1
// let x = 5;
// console.log(x++); //5

// //2
// console.log([]+false-null+true); //NaN

// //3 
// let y=1;
// let d=y=2;
// console.log(d); //2

// //4
// console.log([]+1+2); //12
// console.log([]+1);

// //5
console.log("1"[0]); //1

//6
console.log(2&&1&&null&&0&&undefined); //False - null

//7
// alert(null||2&&3||4); // 3

//8
// let a=5, b=10;
// console.log(!!(a&&b)); //false
// console.log(a&&b); //10

//9
let a = [1,2,3], b = [1,2,3];
console.log(a==b); //false

// //10
console.log(+"Infinity"); // NaN

//11
console.log("Ёжик" > "яблоко"); //false

//12
console.log(0||""||2||undefined||true||false); //2

