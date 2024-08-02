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

