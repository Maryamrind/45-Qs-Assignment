// Assignment # 12
/**Greetings: Start with the array you used in Exercise 11, but instead of just printing each
 *  person’s name, print a message to them.The text of each message should be the same, but each 
 * message should be personalized with the person’s name.*/

let names:string[] = ["Muntaha","Malaika","Aqsa","Kulsoom","Noor"]

for (let i = 0; i < names.length; i++) {
    console.log (names[i]);
    
}

names.forEach(friendNames => {
    console.log(friendNames)
});

for (const friendNames of names) {
    console.log(friendNames)
    
}

for (let i = 0; i < names.length; i++) {
    console.log (`Hello!${names[i]} How are you today?`)
};


names.forEach(friendNames => {
    console.log(`Hi ${friendNames}, How is your Day?`)
});

for (const friendNames of names) {
    console.log(`Hey ${friendNames}, Did you watch today's match?`)
    
}

