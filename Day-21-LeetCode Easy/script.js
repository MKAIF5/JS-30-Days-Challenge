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
    let reverseConverted = parseInt(integer.toString().split("").reverse().join("") , 10);
  
    if(integer < 0){
      return reverseConverted * -1
    }
    return reverseConverted
  }
  
  console.log(takeInteger("-327"));