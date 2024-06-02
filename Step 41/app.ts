//  Assignment # 41
/**Magicians: Make a array of magician’s names.
 *  Pass the array to a function called show_magicians(),
 *  which prints the name of each magician in the array. */

// Define the array containing magic names
let magicians:string[]=["David Copperfield","Dynamo","Penn and Teller","Derren Brown"]

function show_magicians(magician:string[]){
    for (const magician of magicians) {
        console.log(magician);
        
        
    }
}
// Call the function
show_magicians(magicians)