"use strict";
// Assignment # 14
// Defines array of each guest for dinner
let guestList = ["Mehak Faizan", "Laraib Owais", "Muntaha Ibrahim"];
guestList.forEach(guestInvited => {
    console.log(`Assalam u alaikum ${guestInvited}, we are pleased to invite you for dinner on this Sunday.`);
});
for (const guestInvited of guestList) {
    console.log(`Dear ${guestInvited}, you are cardially invited for dinner.`);
}
;
let invitation = guestList.map(guestInvited => `Dear ${guestInvited}, you are cardially invited for dinner.`);
console.log(invitation);
