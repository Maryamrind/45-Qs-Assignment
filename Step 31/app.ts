// Assignment # 31

/**No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

/* If the list is empty,print the message 
we need to find some users! */

let UserName:string[] = ["Admin","Laiba Rind","Maryam Rind","Owais Raza ARk","Umm e Khadija"]

if(UserName.length===0){
    console.log("We need to find some users!");
    
}
/* Remove all of the username from your array 
and make sure the correct message is printed*/
else{
    UserName = []
    console.log("All user have been removed "+ UserName.length);
    
}

    



