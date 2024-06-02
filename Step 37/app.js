"use strict";
// Assignment # 37
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making ${size} sized T-shirt with a message "${message}" print on it`);
}
make_shirt(); //Default large and message
make_shirt("medium"); //Default message ,medium size
make_shirt("small", "From the River to the sea, Plestine will be free");
