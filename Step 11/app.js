// Assignment # 11
// array
// defines an array of names
var names = ["Muntaha", "Malaika", "Sarwat", "Kulsoom", "Noor"];
// loop
// for each
// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// for each
names.forEach(function (names) {
    console.log(names);
});
// for of loop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friendName = names_1[_i];
    console.log(friendName);
}
