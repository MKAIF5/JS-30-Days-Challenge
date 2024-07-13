//Practice Before Challenge : Data Types

//Data Types
// const string = "kaif";
// const number  = 30;
// const boolean = true;
// const undefined = undefined;
// const nUll = null;
// const bigInt = 6345736486n;
// const symbol = symbol("unique")

// console.log(typeof nUll);

// let valueInNumber = "kaif";
// const updatedNumber = Number(valueInNumber);
// console.log(typeof updatedNumber);

//Data Types Conversion

// 33 => "33" =  string
// "33" => 33 = number
// 33 => "33abc" = NAN
// 1 => boolean && number = true
// 0 => boolean && number = false
// "" => boolean && number = false 
// " " => boolean && number = true 

// let loggedIn = "";
// const boolCheck = Boolean(loggedIn);
// console.log(boolCheck);


// let value  = 5
// let negValue = -value
// console.log(negValue);

// console.log(10**9)

// console.log((3 + 4) * (7 - 1));

// Challenge Start

// Activity 1 : Variable Declaration

// Task 1 : Declare a variable  using var , assign it a number and log the value to the
// console ?
var num = 15;
console.log(num);

// Task2 :  Declare a variable  using let , assign it a string and log the value
//  to the console ?
let str = "kaif";
console.log(str);

// Activity 2 : Constant Declaration

// Task3 :  Declare a variable  using const , assign it a boolean value 
// and log the value to the console ?
const bool = true;
console.log(bool);

// Activity 3 : Data Types

// Task4 : Create Variable of different types (number , string , boolean , object , array)
// and log each variables type using the typeof operators
const number = 5;
const string = 'practice';
const boolean = false;
const arr = ["data types", 33, true];
const obj = {
    userName: "kaif",
    age: 14,
    location: "karachi",
    logedIn: true
}
console.log(typeof(number));  
console.log(typeof(string));  
console.log(typeof(boolean));  
console.log(typeof(arr));  
console.log(typeof(obj));  

// Activity 4 : Reassigning Value

