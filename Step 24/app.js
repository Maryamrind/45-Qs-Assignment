"use strict";
// // Assignment # 24
// // Test for equality or unequality  with string
const string1 = "Hello";
const string2 = "world";
console.log(string1 == string2); //False
console.log(string1 !== string2); //True
//Test using the lowercase function
const Uppercasr = "ZARA";
const lowercase = "zara";
console.log(Uppercasr.toLowerCase() === lowercase); //True
/*Numerical test involving equality and inequality, greater than
 and less than,greater then or equal to and less than or equal to*/
let number1 = 60;
let number2 = 70;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
// Test using "and" and "||"
let x = 30;
let y = 40;
let z = 50;
console.log((x > y) && (y < z)); //False
console.log((x < y) || (y > z)); //True
//Test wether an item is in array
const array = [1, 2, 3, 4, 5, 6];
const itemToFind = 3;
console.log(array.indexOf(itemToFind) !== -1); //true
// Test wether an item is not in array
console.log(array.indexOf(10) === -1);
