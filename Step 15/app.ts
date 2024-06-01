// Assignment # 15

/**anging Guest List: You just heard that one of your guests can’t make the dinner,
 *  so you need to send out a new set of invitations. You’ll have to think of someone else to invite 
 * • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
 * the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list*/

// defines array of guests
let guests:string[] = ["Mehak Faizan","Laraib Owais","Malaika Farooq"];
// print the name who can not make dinner
let unableToAttend:string = guests.splice(2,1)[0];

 console.log(`${unableToAttend} can't make dinner.`);
// push 
guests.push("Muntaha Ibrahim");
//  print a message
guests.forEach(newGuest => {
    
console.log(`Hi ${newGuest},its pleasure to invite you for dinner this Sunday.`)
});
