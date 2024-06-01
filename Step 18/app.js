"use strict";
// Assignment # 18
// Defines the array of place i'd like to visit
let placesToVisit = ["Saudi Arabia", "Turkey", "Palestine", "Malaysia", "Swizerland"];
//  print in original order
console.log("original order:", placesToVisit);
// array in alphabetical order without modifying the actual list
console.log("/n Alphabetical order:", placesToVisit.slice().sort());
// the array is still in its original order by printing it
console.log("original order:", placesToVisit);
// array in reverse alphabetic order without changing the order of the original order list
console.log("reverse order:", placesToVisit.slice().sort().reverse());
//  the array is still in its original order
console.log("original order:", placesToVisit);
// reversing the order of list and printing the array to show that its order has changed
console.log("reverse order changed:");
placesToVisit.reverse();
console.log(placesToVisit);
// reversing the order of list again and printing the array to show that its back to its original order
console.log("original order:", placesToVisit.sort());
console.log(placesToVisit);
// sort the array so its stored in alphabetical order and print the array to show that its order has been changed
console.log("reversed alphabetical order changed:", placesToVisit.sort().reverse());
console.log(placesToVisit);
