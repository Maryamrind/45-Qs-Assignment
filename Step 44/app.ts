// Assignment # 44

/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
 * The function should have one parameter that collects as many items as the function call provides, 
 * and it should print a summary of the sandwich that is being ordered. Call the function three times, 
 * using a different number of arguments each time.*/

function sandwich(...items:string[]){
    console.log("\nYou have ordered a sandwich with following items:\n");

    items.forEach(SingleItems => console.log(SingleItems)
    )
    
    console.log("\nNow Enjoy your Sandwich \n ");
    
        
    };
    

   // Call the function three times, using a different number of arguments each time.
   
sandwich("Zinger Chicken");

sandwich("Mayo","loaded cheese");

sandwich("jalapeno","PeriPeri Sauce","lettuce");



