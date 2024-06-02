// Assignment # 33 
// Make an array of ordinal numbers from 1 to 9
var my_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var i = 0; i < my_Numbers.length; i++) {
    if (my_Numbers[i] == 1) {
        console.log("".concat(my_Numbers[i], "st"));
    }
    else if (my_Numbers[i] == 2) {
        console.log("".concat(my_Numbers[i], "nd"));
    }
    else if (my_Numbers[i] == 3) {
        console.log("".concat(my_Numbers[i], "rd"));
    }
    else if (my_Numbers[i] > 3) {
        console.log("".concat(my_Numbers[i], "th"));
    }
}
