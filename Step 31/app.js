"use strict";
// Assignment # 31
/* If the list is empty,print the message
we need to find some users! */
let UserName = ["Admin", "Laiba Rind", "Maryam Rind", "Owais Raza ARk", "Umm e Khadija"];
if (UserName.length === 0) {
    console.log("We need to find some users!");
}
/* Remove all of the username from your array
and make sure the correct message is printed*/
else {
    UserName = [];
    console.log("All user have been removed " + UserName.length);
}
