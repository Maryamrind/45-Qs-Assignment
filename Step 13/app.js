"use strict";
// Assignment # 13
let transportationMode = ["car", "bicycle", "motorcycle", "bus"];
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a ${transportationMode[i]}`);
}
transportationMode.forEach(transportationMode => {
    console.log(`I would like to own a ${transportationMode}`);
});
