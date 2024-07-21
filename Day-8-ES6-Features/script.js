// Challenge Started

// Activity 1 : Template Literals

// Task 1 : Use Template literals to create a string that includes variables 
// for a person name and age, and log the string to the console
let naMe = "kaif";
let age = "15";
console.log(`name is ${naMe} , age is ${age}`);

// Task 2 : Create a multi-line string using templete literals and log it to the console
let multiLine = `Create a multi-line string using templete 
literals and log it to the console`
console.log(multiLine);

// Activity 2: Destructuring

// Task 3 : Use array destructuring to extract the first and second element from an
// array of numbers and log them to the console
let nums = [1, 32, 53, 4, 5, 24];
let [first, second] = nums;
console.log(first, second);

// Task 4 : Use object destructuring to extract the title and author from the book 
// object and log them to the console
const books = {
    title: "text",
    author: "text",
    year: "text"
}

let { title, author } = books
console.log(title, author);

// Activity 3 : Spread and Rest Operators

// Task 5 : Use the spread operator to create a new array that includes all element 
// of an existing array plus additional elements,and log the new array to the console
let foodBrands = ["kfc", "mcd", "burgerking"];
let allFoodsBrands = [...foodBrands, "starbucks", "domino", "pizzahut", "pepsi"];
console.log(allFoodsBrands);

// Task 6 : Use the rest operators in a function to accept an arbitrary number of arguments 
// sum them, and return the result
function sum(...args) {
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4 : Default Parameters

// Task 7 : write a function that takes two parameters and return thier product
// with the second parameter having a default value of 1 . log the result of 
// calling this function with and without the second parameter
function para(par1, par2 = 1) {
   return par1 + par2
}
console.log(para(2));
console.log(para(2 , 5));

// Activity 5 : Enhanced Object Literals

// Task 8 : Use enhanced object literals to create an object with methods and
// properties , and log the object to the console

let name = "kaif";
let ages  = 15;
let color =  "green";
let loggedIn = true;
let makeObj = {name , ages , color , loggedIn}
console.log(makeObj);

// Task 9 : Create an object with computed property names based on variables and 
// log the object to the console
let ver = "version";

let user = {
   computer: "dell",
   ram: 36,
   rom: 3543,
   generation: "8th",
   ["version"]: 2020
}
console.log(user);

// Tasks Completed