// Practice Before Challenge : Operators

//Arthmetic Operators
// let a = 7;
// let b = 3;
// console.log("a + b = ", a + b);//Addition
// console.log("a - b = ", a - b);//Subtraction
// console.log("a * b = ", a * b);//Multiplication
// console.log("a / b = ", a / b);//Division
// console.log("a / b = ", a % b);//Modulus
// console.log("a / b = ", a ** b);//Exponentiation

// Unary Operators
// let a = 5;
// a++ + --a
// console.log(a); 

//Assaigment Operators

// = , =+ , *= , **= , -= , %=

// let a = 5;
// a -= 2 * 2
// console.log(a);

// Comparison Operators

// == , === , != , !==

// let a = 5;
// let b = 5;
// console.log(a === b);

// Challenge Started : Operators

// Activity 1 : Arthmetic Operators

// Task 1 :  Write a program to add two number and log the result to the console
console.log(3 + 3);
// Task 2 :  Write a program to subtract two number and log the result to the console
console.log(5 - 3);
// Task 3 :  Write a program to multiply two number and log the result to the console
console.log(5 * 10);
// Task 4 :  Write a program to divide two number and log the result to the console
console.log(10 / 5);

//Activity 2 : Assigment Opertors

// Task 6 : Use the += operator to add a number to a variable and log the result to the console
let add = 1;
add += 2
console.log(add);
// Task 7 : Use the -= operator to subract a number from a variable and log the result to the console
let sub = 5;
sub -= 4;
console.log(sub);

// Activity 3 : Comporison Operator

// Task 8 : Write a program to compare > and < and log the result to the console
console.log(3 > 1);
console.log(30 < 20);
// Task 9 : Write a program to compare >= and <= and log the result to the console
console.log(3 >= 3);
console.log(7 <= 5);
// Task 10 : Write a program to compare == and === and log the result to the console
console.log(2 == "2");
console.log(3 === 5);

// Activty 4 : Logical Operator

// Task 11 : Write a program to uses the && operator to combine two condition and
// log the result to the console
let userName = "kaif";
let locations = "karachi";
if (userName === "kaif" && locations === "karachi") {
    console.log("correct");
}
else {
    console.log("not correct");
}
// Task 12 :  Write a program to uses the || operator to combine two condition and
// log the result to the console
let age = 15;
let loggedIn = true;
if (age === 15 || loggedIn === false) {
    console.log("correct");
}
else {
    console.log("not correct");
}
// Task 13 : Write a program to uses the != operator to combine two condition and
// log the result to the console
let price = 199;
if (price != 199) {
    console.log("correct");
}
else {
    console.log("not correct");
}

// Activity 5 : Ternary Oprator

// Task 14 : Write a program that use ternary operator to check if a number 
// is postive or negative and log the result to the console
let courseInRoll = prompt("enter your number");
let result = courseInRoll > 18 ? "Inroll" : "Not Inroll";
console.log(result);

// Task Completed
