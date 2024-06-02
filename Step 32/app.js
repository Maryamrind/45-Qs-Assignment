"use strict";
// Assignment # 32
// Make a list of five or more usernames called current users.
let current_username = ["Irsa Baloch", "Maryam Rind", "Laib Rind", "Mehak Faizan", "Laraib Owais"];
/*Make another a list of five or more usernames called new users.
Make sure one or two of the usernames are also in the current users list*/
let new_username = ["Anwar Rind", "Maryam Rind", "Laib Rind", "Khadija Owais", "Fabiha Faizan"];
new_username.forEach((new_usernames) => {
    if (current_username.some((current_username) => current_username.toLowerCase() === new_usernames.toLowerCase())) {
        console.log(`${new_usernames} will need to enter a new username.`);
    }
    else {
        console.log(`${new_usernames} is available`);
    }
});
