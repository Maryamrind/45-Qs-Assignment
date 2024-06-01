// Assignment # 16
/**More Guests: You just found a bigger dinner table, so now more space is available.
 *  Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list */

let guests:string[] = ["Mehak Faizan","Laraib Owais","Muntaha Ibrahim"];

// print news for bigger table
console.log("Great! We just found bigger dinner table");

// Add new guest in the beginning of array
guests.unshift("Umm e Fatima");

// add new guest in the middle of array
guests.splice(Math.floor(guests.length/2),0,"Fizza Queshi");

// Add new guest in the end of array
guests.push("Fariya Qureshi")

// print message of a new set of invitation to each guest
guests.forEach(guest => {
    console.log(`Dear ${guest},you all are cardially invited to dinner this Eid. `);
    
    
});