// Assignment # 40
/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries
representing different albums. Print each return value to show that Objects are storing 
the album information correctly. Add an optional parameter to make_album() that allows you to store the 
number of tracks on an album. If the calling line includes a value for the number of tracks, 
add that value to the album’s Object. Make at least one new function call that includes 
the number of tracks on an album.*/


function make_album(artist:string,title:string) {
    return `${artist},${title}`
    
}
let make_album1 = make_album("Abida Parveen","Raqs e Bismil");
let make_album2 = make_album("Atif Aslam","kachi Dorion");
let make_album3 = make_album("Nazia Hassan","Ap jesa koi ");

console.log(make_album1);
console.log(make_album2);
console.log(make_album3);


function make_Album(artist:string,title:string,track_no:number ) {
    return `${artist},${title},${track_no}`
    
}

let make_Album1= make_Album("Abida Parveen","Raqs e Bismil",34);
let make_Album2 = make_Album("Atif Aslam","kachi Dorion",42);
let make_Album3 = make_Album("Nazia Hassan","Ap jesa koi",64);

console.log(make_Album1);
console.log(make_Album2);
console.log(make_Album3);


