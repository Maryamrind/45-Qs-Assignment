"use strict";
// Assignment # 30
/*Make an array of usernames including name "admin",
loop through the array and print a greeting to each user:
i- If the usernam is admin, print a special greeting such as
Hello admin would you like to see a status report?
ii- otherwise print a generic greeting*/
const UserName = ["Admin", "Laiba Rind", "Maryam Rind", "Owais Raza ARk", "Umm e Khadija"];
/* If user name includes name Admin ,Print that "Hello Admin,
would you like to see a status report?"*/
for (const UserNames of UserName) {
    if (UserNames === "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    /*  otherwise print a generic greeting*/
    else {
        console.log(`Hello ${UserNames}, thank you for logging in again`);
    }
}
