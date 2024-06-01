// Assignment # 30
/**Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
 *  code that will 
 * print a greeting to each user after they log in to a website. Loop through the array, and print a 
 * greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again */

//Make an array of five or more usernames

let UserName:string[] = ["Admin","Laiba Rind","Maryam Rind","Owais Raza ARk","Umm e Khadija"]

 /* If user name includes name Admin ,Print that "Hello Admin, 
 would you like to see a status report?"*/

for(let UserNames of UserName){

    if(UserNames ==="admin"){
        console.log("Hello Admin, would you like to see a status report?");
        
    }

    /*  otherwise print a generic greeting*/

    else{
         console.log(`Hello ${UserNames}, thank you for logging in again`)}
}

    



