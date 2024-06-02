// Assignment # 32

/**Checking Usernames: Do the following to create a program that simulates how websites 
 * ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

// Make a list of five or more usernames called current users.

let current_username :string[]=["Irsa Baloch","Maryam Rind","Laib Rind","Mehak Faizan","Laraib Owais"];

/*Make another a list of five or more usernames called new users.
Make sure one or two of the usernames are also in the current users list*/

let new_username :string[]=["Anwar Rind","Maryam Rind","Laib Rind","Khadija Owais","Fabiha Faizan"];

new_username.forEach((new_usernames) => {
  if(
    current_username.some(
      (current_username) => current_username.toLowerCase ()=== new_usernames.toLowerCase()
    )
  ){
    console.log(`${new_usernames} will need to enter a new username.`);
  }else {
    console.log(`${new_usernames} is available`);
    
  }
  
});