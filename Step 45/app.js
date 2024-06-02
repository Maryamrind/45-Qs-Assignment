"use strict";
// Assignment # 45
function car_Info(manufacturer, model, options) {
    return Object.assign({ manufacturer: manufacturer, model: model }, options);
}
// call the function with required information and additional name-value pairs.
let car = (car_Info("Toyota", "Corolla", { color: "black", Sunroof: true, Year: 2024 }));
// print the returned object
console.log(car);
