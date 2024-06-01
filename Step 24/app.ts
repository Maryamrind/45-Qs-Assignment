// // Assignment # 24
/**More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 * If you want to try more comparisons, write more tests. Have at least one True and one False result 
 * for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
 and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */


// // Test for equality or unequality  with string

const string1 : string = "Hello"
const string2 : string = "world"

console.log(string1 == string2); //False
console.log(string1 !== string2); //True

//Test using the lowercase function

const Uppercasr : string = "ZARA"
const lowercase : string = "zara"

console.log(Uppercasr.toLowerCase()===lowercase); //True

/*Numerical test involving equality and inequality, greater than
 and less than,greater then or equal to and less than or equal to*/

 let number1 = 60
 let number2 = 70
 console.log(number1 === number2); //false
 console.log(number1 !== number2);  //true

 console.log(number1 > number2);   //false
 console.log(number1 < number2);   //true

 console.log(number1 >= number2);  //false
 console.log(number1 <= number2);   //true

 // Test using "and" and "||"

 let x = 30
 let y = 40
 let z = 50
console.log((x>y) && (y<z));  //False
console.log((x<y) || (y>z));  //True

//Test wether an item is in array

const array: number[] =[1,2,3,4,5,6];
const itemToFind : number = 3;

console.log(array.indexOf(itemToFind)!== -1); //true

// Test wether an item is not in array

console.log(array.indexOf(10)=== -1);






 
 
 
 

