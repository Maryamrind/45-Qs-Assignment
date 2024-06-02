//  Assignment # 43

/*Unchanged Magicians: Start with your work from Exercise 41.
Call the function make_great() with a copy of the array of magicians’ names.
  Because the original array will be unchanged, return the new array and store it in a separate array. 
  Call show_magicians() with each array to show that you have one array of
 the original names and one array with the Great added to each magician’s name*/
 

 let magicians:string[]=["David Copperfield","Dynamo","Penn and Teller","Derren Brown"]

function show_magicians(magicians:string[]){
    for (const magician of magicians) {
        console.log( magician);
        
        
 }
}
// // // Call the magician names
// show_magicians(magicians)


// Function to make magicians great through for loop.It will modify
function make_great(magician:string[]){
    return magicians.map(name=> `The Great ${name}`)
}
// to call make_great function
// make_great(magicians)
// show_magicians(magicians)



let copy_magicians = magicians.slice()


let copy_great_magicians = make_great(copy_magicians)


console.log("\n Original array:\t");

show_magicians(magicians)

console.log("\n Copied array:\t");

show_magicians(copy_great_magicians)