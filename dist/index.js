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
let employee = {
    id: 1,
    name: 'Beth',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 2,
    name: 'Jake',
    retire: (date) => {
        return date;
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.3;
    }
}
kgToLbs(10);
kgToLbs('10');
// console.log(kgToLbs(10))
// console.log(kgToLbs('10'))
//# sourceMappingURL=index.js.map