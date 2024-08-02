// Challenge Started

// Activity 1 : Two Sum

// Task 1 : Solve the "Two Sum" problem on LeetCode
// 1 : Write a function that takes array of number and a target number, return the
// indices of the two numbers that add up to the target
// log the indices for a few test cases
const takeArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === target) {
            return [left, right]
        }
        else if (sum < target) {
            left++
        }
        else {
            right--
        }
    }
    return []
}

console.log(takeArray([4, 6, 47, 45], 9));

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode. 
// Write a function that takes an integer and returns it with its digit reversed. Handle
// edge cases like negative numbers and numbers ending in zero. Log the reversed
// integers for a few test cases.
const takeInteger = (integer) => {
    let reverseConverted = parseInt(integer.toString().split("").reverse().join(""), 10);

    if (integer < 0) {
        return reverseConverted * -1
    }
    return reverseConverted
}

console.log(takeInteger("-327"));

// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on leetCode. 
// Write a function that takes an integer and returns true if it is a palindrome, and
// false otherwise. Log the result for a few test cases, including edge cases like 
// negative numbers.
const takePlandrome = (x) => {
    if (x < 0) {
        return false
    }
    let num = x;
    let zeroNum = 0;
    while (num > 0) {
        let define = num % 10;
        zeroNum = zeroNum * 10 + define;
        num = Math.floor(num / 10)
    }
    if (zeroNum === x) {
        return true
    }
    return false
}
console.log(takePlandrome(1246541));

