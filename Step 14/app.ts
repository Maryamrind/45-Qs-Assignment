// Assignment # 14
/**Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
 * Make a list that includes at least three people you’d like to invite to dinner. 
 * Then use your list to print a message to each person, inviting them to dinner.*/

// Defines array of guest
let guestList:string[] = ["Mehak Faizan","Laraib Owais","Muntaha Ibrahim"]
// invite each guest for dinner

 guestList.forEach(guestInvited => {
    console.log(`Assalam u alaikum ${guestInvited}, we are pleased to invite you for dinner on this Sunday.`);
    
});
for (const guestInvited of guestList) {
    console.log(`Dear ${guestInvited}, you are cardially invited for dinner.`);
};
// map()
// invite guest
let invitation:string[] = guestList.map(guestInvited => `Dear ${guestInvited}, you are cardially invited for dinner.`)
console.log(invitation)