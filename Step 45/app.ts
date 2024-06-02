// Assignment # 45


/** Cars: Write a function that stores information about a car in a Object. 
 * The function should always receive a manufacturer and a model name. 
 * It should then accept an arbitrary number of keyword arguments. 
 * Call the function with the required information and two other name-value pairs,
 *  such as a color or an optional feature. Print the Object that’s returned to make sure all 
 * the information was stored correctly*/



type car ={
  manufacturer: string,
  model: string,
  [key: string]: any;    //allow any additional properties

}

function car_Info(manufacturer:string,model:string,options:Partial<car>):car{
  return{
    manufacturer:manufacturer,
    model:model,
   ...options
  }
}

// call the function with required information and additional name-value pairs.

let car = (car_Info("Toyota","Corolla",{color:"black",Sunroof:true,Year:2024}));

// print the returned object

console.log(car);
