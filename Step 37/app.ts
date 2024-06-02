// Assignment # 37

/**Large Shirts: Modify the make_shirt() function so that shirts are large by default 
 * with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
 * the default message, and a shirt of any size with a different message. */


function make_shirt(size:string="large",message:string="I love TypeScript"){
    console.log(`Making ${size} sized T-shirt with a message "${message}" print on it`);
    
}
make_shirt() //Default large and message
make_shirt("medium") //Default message ,medium size
make_shirt( "small","From the River to the sea, Plestine will be free")