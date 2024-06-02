"use strict";
// Assignmenr # 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Pishawar");
describe_city("Dubai", "UAE");
