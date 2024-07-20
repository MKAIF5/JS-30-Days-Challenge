// Practice Before challenge

// let arr = ["kaif" , 15 , "karachi" , false , 91 , "cricket" , false];
// let arr1 = ["kashif" , 33 , "kfc job"];
// let arr2 = ["safia" , 33 , "mcdonald job"];

// let allArr = arr.concat(arr1);
// let allArr2 = allArr.concat(arr2);
// console.log(allArr2);

// let allName = [...arr , ...arr1 , ...arr2];
// console.log(allName);

// let newArr = arr.join()

// console.log(typeof newArr);
// console.log(typeof arr);
// console.log(arr);
// console.log(newArr);
// console.log(arr.splice(1,3));
// console.log(arr.slice(1,3));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3));
// console.log(Array.isArray("kaif"));
// console.log(Array.from("kaif"));

// for of loop

// const arr = [1,2,3,4,5];
// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hello Guests";

// for (const greet of greetings) {
//     console.log(greet);
// }

// Map

// const map = new Map();
// map.set("pak",  "pakistan");
// map.set("chi" , "china");
// map.set("tur" , "turkey");
// console.log(map);

// for (const [key , value] of map) {
//     console.log(key , value);
// }

// For Each

// const coding = ["js", "py", "cpp", "java", "typ"];
// coding.forEach(function (programming) {
//     console.log(programming);
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         fileName: "js"
//     },
//     {
//         languageName: "python",
//         fileName: "py"
//     },
//     {
//         languageName: "typescript",
//         fileName: "ts"
//     },
// ];

// const values = myCoding.forEach((item) => {
//     console.log(item.languageName)
// })
// console.log(values);


// Filter

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let filNums = nums.filter((num) => num > 4 )
// console.log(filNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const getarray = books.filter((bk) => bk.genre === "History")

// console.log(getarray);




// Challenge Started

// Activity 1 : Array Creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);

// Task 2 : Access the first and last elements of the array and log them to the console
const arrAccess = ["array", 15, true, undefined];
console.log(arrAccess[0] , arrAccess[3]);

// Activity 2 : Array Methods (Basics)

// Task 3 : Use the (push) method to add a new number to the end of the array and
// log the updated array
let pushArr = ["push", "pop", "unshift"];
pushArr.push("shift");
console.log(pushArr);

// Task 4 : Use the (pop) method to remove the last element from the array and log
// the updated array
let popArr = ["push", "pop", "unshift", "shift", "sdhufh"];
popArr.pop();
console.log(popArr);

// Task 5 :  Use the (shift) method to remove the first element from the array and log
// the updated array
let shiftArr = ["shdjfdf", "push", "pop", "unshift", "shift"];
shiftArr.shift();
console.log(shiftArr);

// Task 6 :  Use the (unshift) method to add a new number to the beginning of the
// array and log the updated array
let unshiftArr = ["pop", "unshift", "shift",];
unshiftArr.unshift("push");
console.log(unshiftArr);

// Activity 3 : Array Methods (Intermidiate)

// Task 7 : Use the (map) method to create a new array where each number is doubled
// and log the new array
let mapArray = [1, 2, 3, 4, 5];
const mapDouble = mapArray.map((e) => {
    return e * 2
})
console.log(mapDouble);

// Task 8 : Use the filter methods to create a new array with only even numbers
// and log the new array
let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenFilter = filterArray.filter((even) => {
    return even % 2 === 0
})
console.log(evenFilter);

// Task 9 : Use the reduce methods to calculate the sum of all numbers in the array
// and log the result
const reduceArray = mapArray.reduce((accumlater, currentValue) => {
    console.log(accumlater, currentValue)
    return accumlater + currentValue;
}, 0)

// Activity 4 : Array iteration

// Task 10 : Use a for loop to iterate over the array and log each element to the
// console
let getArray = [1, 2, 3, 4, 5];
for (let i = 0; i < getArray.length; i++) {
    console.log(getArray[i]);
}

// Task 11 : Use the forEach method to iterate over the array and log each element to 
// the console
let eachArray = [1, 2, 3, 4, 5];

let arrGet = eachArray.forEach((arr) => console.log(arr));

// Activity 5 : Multi Dimensional

// Task 12 : Create a two dimensional array (matrix) and log the entire array to the 
// console
let matrixArray = [[1,2,3], [4,5,6], [7,8,9]];
console.log(matrixArray);

// Task 13 : Access and log a specific element from the two-udimensional-array
console.log(matrixArray[1]);

// Tasks Completed