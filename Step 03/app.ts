#! /usr/bin/env node

// Assignment # 3

/**Name Cases: Store a person’s name in a variable,
 *  and then print that person’s name in lowercase, uppercase, and titlecase. */

//storing a person's name in a variable

let personName:string ="Maryam Rind";

//printing a person name in Lowercase

console.log("Lowercase:", personName.toLowerCase());

//printing a person name in Uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing a person name in Titlecase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

