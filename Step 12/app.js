"use strict";
// Assigment # 11
// 
let names = ["Muntaha", "Malaika", "Aqsa", "Kulsoom", "Noor"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
names.forEach(friendNames => {
    console.log(friendNames);
});
for (const friendNames of names) {
    console.log(friendNames);
}
// Assigment # 12
for (let i = 0; i < names.length; i++) {
    console.log(`Hello!${names[i]} How are you today?`);
}
;
names.forEach(friendNames => {
    console.log(`Hi ${friendNames}, How is your Day?`);
});
for (const friendNames of names) {
    console.log(`Hey ${friendNames}, Did you watch today's match?`);
}
