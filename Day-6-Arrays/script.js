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

const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
}

// Challenge Started

// Activity 1 : Array Creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console
const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);

// Task 2 : Access the first and last elements of the array and log them to the console
const arrAccess = ["array", 15, true, undefined];
// console.log(arrAccess[0] , arrAccess[3]);

// Activity 2 : Array Methods (Basics)

// Task 3 : Use the (push) method to add a new number to the end of the array and
// log the updated array
let pushArr = ["push" , "pop" , "unshift"];
pushArr.push("shift");

// Task 4 : Use the (pop) method to remove the last element from the array and log
// the updated array
let popArr = ["push" , "pop" , "unshift" , "shift" , "sdhufh"];
popArr.pop();

// Task 5 :  Use the (shift) method to remove the first element from the array and log
// the updated array
let shiftArr = ["shdjfdf" , "push" , "pop" , "unshift" , "shift" ];
shiftArr.shift();

// Task 6 :  Use the (unshift) method to add a new number to the beginning of the
// array and log the updated array
let unshiftArr = ["pop" , "unshift" , "shift" ,];
unshiftArr.unshift("push");