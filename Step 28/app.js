"use strict";
// Assignment # 28
let age = 60;
/* If the person is less than 2 years ,
print a message that the person is a baby*/
if (age < 2) {
    console.log("The person is a baby");
}
/*IF the person is at least 2 years old but less than 4,
print a message that the person is a toddler */
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
/*IF the person is at least 4 years old but less than 13,
print a message that the person is a kid */
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
/*IF the person is at least 13 years old but less than 20,
print a message that the person is a teenager */
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
/*IF the person is at least 20 years old but less than 60,
print a message that the person is a adult */
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
/*IF the person is 65 years or greater than 65,
print a message that the person is a toddler */
else if (age >= 65 && age > 65) {
    console.log("The person is an elder");
}
