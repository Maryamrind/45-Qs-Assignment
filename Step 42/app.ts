// Assignment # 42

/**Great Magicians: Start with a copy of your program from Exercise 41. Write a
 *  function called make_great() that modifies the array of magicians by adding the phrase the Great to each
 *  magician’s name. Call show_magicians() to see that the list has actually been modified */



// Define an array containing magician names
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
    for (let i = 0; i < magicians.length; i++) {
       
        
        magicians[i]=magicians[i]+" "+"the Great";
        
    }
}
// to call make_great function
make_great(magicians)
show_magicians(magicians)

















