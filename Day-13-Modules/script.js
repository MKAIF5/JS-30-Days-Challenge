// Challenge Started

// Activity 1 : Creating and exporting Modules

// Task 1 : Create a module that exports a function to add two numbers. import and 
// use this module in another script
const func = function addtwo(n1, n2) {
    return n1 + n2
}

export { func };

// Task 2 : Create a module that exports an object representing a person with Properties
// and method. import and use this modules in anothor scripts.
const user = {
    name: 'kaif',
    age: 15,
    isLogged: true
};
export { user };

// Activity 2 : Named and Default exports

// Task 3 : Create a module that exports multiple functions using named exports. import
// and use functions in another scripts
const add = (a, b) => {
    return a + b
}

const mul = (m1, m2) => {
    return m1 * m2
}

const div = (d1 , d2) => {
   return d1 / d2
}

export {add}
export {mul}
export {div}

// Task 4 :  Create a module that exports a single functions using default exports. 
// import and use this function in another scripts
export default function min(){
    return 3 - 1
}

// Activity 3 : Importing Intire Modules

// Task 5 : Create a module that exports multiple constants and function.import 
// the entire module as an object in another script and use its properties.
export const adds = (a, b) => a + b;
export const muls = (a, b) => a * b;
export const divs = (a, b) => a / b;
export const subs = (a, b) => a - b;

export const Person = {
    Name: "Debanjali",
    Branch: "CSE",
    College: "NIT"
}