"use strict";
let age = 20;
if (age < 50)
    age += 10;
let user = [1, 'beth'];
let mySize = 2;
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.1;
    }
    else {
        return income * 1.2;
    }
}
console.log(calculateTax(10000, 2022));
//# sourceMappingURL=index.js.map