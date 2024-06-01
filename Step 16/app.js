"use strict";
// Assigment # 16
let guests = ["Mehak Faizan", "Laraib Owais", "Muntaha Ibrahim"];
// print news for bigger table
console.log("Great! We just found bigger dinner table");
// Add new guest in the beginning of array
guests.unshift("Umm e Fatima");
// add new guest in the middle of array
guests.splice(Math.floor(guests.length / 2), 0, "Fizza Queshi");
// Add new guest in the end of array
guests.push("Fariya Qureshi");
// print message of a new set of invitation to each guest
guests.forEach(guest => {
    console.log(`Dear ${guest},you all are cardially invited to dinner this Eid. `);
});
