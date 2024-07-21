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