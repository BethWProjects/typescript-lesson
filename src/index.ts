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

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: 'Beth',
    retire: (date: Date) => {
        console.log(date)
    }
}
let employee2: Employee = {
    id: 2, 
    name: 'Jake',
    retire: (date: Date) => {
        return date
    }
}

function kgToLbs(weight: number | string): number {
    //Narrowing: narrow down this union type into a more specific type
    if (typeof weight === 'number') 
        return weight * 2.2;
        else {
            return parseInt(weight) * 2.3 //convert weight to an integer
        }
    
}
kgToLbs(10)
kgToLbs('10')

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable; //intersection type

let textBox: UIWidget = {  //add the properties of Draggable and Resizable
    drag: () => {},
    resize: () => {}
}