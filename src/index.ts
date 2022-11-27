let age: number = 20;
    if (age < 50)
    age += 10;
    // console.log(age)

let user: [number, string] = [1, 'beth']

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
// console.log(mySize)

function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 1.1
    } else {
        return income * 1.2
    }
}

// console.log(calculateTax(10_000, 2022))
