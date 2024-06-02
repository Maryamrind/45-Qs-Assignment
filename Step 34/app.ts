// Assignment # 34

/**Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
 * and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the
 name of the pizza. For each pizza you should have one line of output containing a simple statement 
 like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an additional 
 sentence, such as I really love pizza! */


let favourite_pizza:string[]=["Pepperoni pizza","Afghani Pizza","Hot & Spicy Pizza","Sicillian Pizza"];
// print only name of pizza
for (let i = 0; i < favourite_pizza.length; i++) {
    console.log(favourite_pizza[i]);
}
    // Print names and sentence/message
   
    for (let i = 0; i < favourite_pizza.length; i++) {
       console.log(`I like to eat ${favourite_pizza[i]}`);
}
console.log(`I really love to eat pizzas.Pizzas come in variety of flavoures and pizza with extra topping 
of mushrooms and jellepino is my most favourite `);
