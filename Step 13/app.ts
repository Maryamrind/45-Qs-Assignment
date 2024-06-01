// Assignment # 13
/**Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
 * and make a list that stores several examples. 
 * Use your list to print a series of statements about these items, 
 * such as “I would like to own a Honda motorcycle. */

let transportationMode:string[] = ["car","bicycle","motorcycle","bus"];

for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
    
}

transportationMode.forEach(transportationMode => {
    console.log(`I would like to own a ${transportationMode}`)
    
});
