"use strict";
// Assigment # 15
// defines array of guests
let guests = ["Mehak Faizan", "Laraib Owais", "Malaika Farooq"];
// print the name who can not make dinner
let unableToAttend = guests.splice(2, 1)[0];
console.log(`${unableToAttend} can't make dinner.`);
// push 
guests.push("Muntaha Ibrahim");
//  print a message
guests.forEach(newGuest => {
    console.log(`Hi ${newGuest},its pleasure to invite you for dinner this Sunday.`);
});
