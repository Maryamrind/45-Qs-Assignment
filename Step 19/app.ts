//  Assignment # 19

/**Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
 *  the number of people you are inviting to dinner */

//working with one of the programs from ex # 14 - 18.
// printing the message indicating the number of people you are inviting to dinner 
let guestList:string[] = ["Mehak Faizan","Laraib Owais","Muntaha Ibrahim"];
console.log("unfortunately! the new dinner table wont arrive so, we can't invite you.");

guestList.unshift("Faizan Qureshi","Fizza Qureshi");

// print message updated list
console.log("updated list of guest", guestList);
// remove guest from the list
while(guestList.length > 2){
    let removedGuest:string | undefined = guestList.pop();
    if(removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, we can't invite you.`);
        
    } }
// }print a amessage to each of the two people still on your list letting them know
guestList.forEach(guest => {
    console.log(`Dear ${guest},you both are invited for the dinner.`)

});
    // remove 2 more names from the list
     guestList.splice(0,guestList.length);

   // print updated empty list

 console.log("updated list of guest:", guestList);



