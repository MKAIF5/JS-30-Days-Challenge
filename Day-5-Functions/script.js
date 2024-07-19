// Practice before challenge

// function addTwoNumbers(num1 , num2){
//    console.log(num1 * num2);
// }

// function addTwoNumbers(num1, num2) {
//     return num1 + num2
// }
// console.log(addTwoNumbers(5, 5));

// function userLoggin(username = "sam"){
//     if(!username){
//       console.log("please enter a user name");
//       return
//     }
//     return `${username} logged in`
// }
// console.log(userLoggin());

// function addTwoNumbers(...cart){
//   return cart
// }
// console.log(addTwoNumbers(100 , 500 , 657 , 364));

// const myObj =  {
//     userName: "kaif",
//     age : 15,
//     loggedIn: true
// };

// function getObj(anyobject){
//     console.log(`username is ${anyobject.userName} age is ${anyobject.age} and loggin is ${anyobject.loggedIn}`);
// }
// getObj(myObj)

// function add(a , b , cb){
//   let result =  a + b
//   cb(result)
// }
// add(3 , 5 , function (value){
//     console.log(value);
// })

// Challenge Started

// Activity 1 : Function Declaration

// Task 1 : Write a function to check if a number is odd or even and log the result
// to the console
function checkNumber(num) {
    if (num % 2 === 0) {
        // console.log("even");
    }
    else {
        // console.log("odd");
    }
}
checkNumber()

// Task 2 : Write a function to calculate the square of a number and return the result
function square(x) {
    return x * x
}
// console.log(square(5));

// Activity 2 : Function Expression

// Task 3 : Write a function expression to find the maximum of two numbers log the 
// result to the console

function max(num1, num2) {
    console.log(`the maximum is ${num1} ${num2} and ${Math.max(num1, num2)}`);
}
const num1 = 5;
const num2 = 10;
max(num1, num2)

// Task 4 : Write a function to concatenate two string and return the result
function concatenate(str1, str2) {
    return str1 + str2
}
// console.log(concatenate("mohammad" , "kaif"));

// Activity 3 : Arrow Function

// Task 5 : Write an arrow function to calculate the sum of two numbers and return 
// the result
const sum = (sum1, sum2) => {
    return sum1 + sum2
}
console.log(sum(5, 5));

// Task 6 : Write an arrow function to check if a string contains a specific
// character and return a boolean value
const strSpecific = (str1, str2) => {
    if (str1.includes(str2)) {
        return true
    }
    return false
}
console.log(strSpecific("specific", "web and app develpment"));

// Activity 4 : Function Parameters and Default Value

// Task 7 : Write a function that takes two parameters and return thier product.
// provide a default value for the second parameter
function product(msg1, msg2 = "kaif") {
    return msg1 + msg2
}
console.log(product("kashif", ""));

// Taks 8 : Write a function that takes a preson name and age and return a greeting
// message.provide a default value for the age
function person(name, age = 15) {
    return name + age
}
console.log(person("welcome "));

// Activity 5 : High Order Function

// Task 9 : Write a higher-order function that takes a function and number ,
// and calls the function many times
function add(add1, add2, callBack) {
    let answer = add1 + add2
    callBack(answer)
    callBack(answer)
    callBack(answer)
    callBack(answer)
    callBack(answer)
}
add(5, 5, (val) => console.log(val));

// Task 10 : Write a higher-order function that takes two function and value , 
// applies the first function to the value , and then applies the second function
// to the result
function highOrder(val1 , val2 , cb){
    let result = val1(cb);
    let result2 = val2(result);
    console.log(result2);
}

function val1(v1){
  return v1 - 3
}

function val2(v2){
    return v2 - 4
}

const cb = 10;
highOrder(val1 , val2 , cb)

// Tasks Completed