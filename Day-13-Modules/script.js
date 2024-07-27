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

const div = (d1, d2) => {
    return d1 / d2
}

export { add }
export { mul }
export { div }

// Task 4 :  Create a module that exports a single functions using default exports. 
// import and use this function in another scripts
export default function min() {
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

// Activity 4 : Using Third-Party Modules

// Task 6 : Install a third party module (e.g lodash) using npm. import and use a 
// function from this module in a script
const _ = require('lodash');

const arr = [1, 2, 3];
const doubled = _.map(arr, x => x * 2);
console.log(doubled);

// Task 7 : Install a third party module (e.g axios) using npm. import and use this 
// module to make a network reqwest in a script
const axios = require('axios'); // Import axios for HTTP requests

// Example of making a GET request
axios.get('https://api.github.com/users/debanjali081')
    .then(response => {
        console.log(response.data); // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });

// Activity 5 : Module Bundling (Optional)

// Task 8 : Use a module bindler like webpack or Parcel to bundle multiple javascripts
// files into a single file. Write a script to demonstarte the bundling process
