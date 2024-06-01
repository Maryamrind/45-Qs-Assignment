// Assignment # 18

/**Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed */

// Defines the array of place i'd like to visit
let placesToVisit:string[] = ["Saudi Arabia","Turkey","Palestine","Malaysia","Swizerland"];

//  print in original order

console.log("original order:",placesToVisit);

// array in alphabetical order without modifying the actual list

console.log("/n Alphabetical order:",placesToVisit.slice().sort());

// the array is still in its original order by printing it

console.log("original order:",placesToVisit);

// array in reverse alphabetic order without changing the order of the original order list

console.log("reverse order:",placesToVisit.slice().sort().reverse()); 

//  the array is still in its original order

console.log("original order:",placesToVisit);

// reversing the order of list and printing the array to show that its order has changed

console.log("reverse order changed:");
placesToVisit.reverse();
console.log(placesToVisit);

// reversing the order of list again and printing the array to show that its back to its original order

console.log("original order:",placesToVisit.sort());
console.log(placesToVisit);

// sort the array so its stored in alphabetical order and print the array to show that its order has been changed

console.log("reversed alphabetical order changed:",placesToVisit.sort().reverse());
console.log(placesToVisit);



















