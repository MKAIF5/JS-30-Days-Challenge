// Challenge Started

// Activity 1 : Basic Recursion

// Task 1 : Write a recursive function to calculate the factorial of a number . Log 
// the result for a few test cases.
function factorial(n) {
    if (n === 0) {
        return 1
    }

    else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));

// Task 2 : Write a recursive function to calculate the nth Fibonacci number . Log 
// the result for a few test cases.
const fibonacci = (number) => {
    if (number === 1 || number === 2) return number - 1
    return fibonacci(number - 1) + fibonacci(number - 2)
}

const fibonacciOfFive = fibonacci(5)
console.log(`Fibonacii of five is : ${fibonacciOfFive}`)

const fibonacciOfTwenty = fibonacci(20)
console.log(`Fibonacci of 20 is : ${fibonacciOfTwenty}`);

// Activity 2 : Recursions WIth Arrays

// Task 3 : Write a recursive function to find the sum of all elements in array. Log 
// the result for few of testcases
function ClaculateArray(currentSum, array, index) {
    if (index === array.length) {
        return currentSum
    }
    currentSum += array[index]
    return ClaculateArray(currentSum, array, ++index)
}

const lambiLoop = ClaculateArray(0, [1, 2, 3, 4, 5], 0)
console.log(lambiLoop);

// Task 4 :  write a recursive function to find the maximum element in an array. Log
// the result
const maximumFind = (max, array, index) => {
    if (index === array.length) {
        return max
    }
    if (max <= array[index]) {
        max = array[index]
    }
    return maximumFind(max, array, ++index)
}

const finding = maximumFind(0, [1, 45, 324, 646, 3543, 64, 645], 0)
console.log(`maximum number ${finding}`);

// Activity 3 : String Manipulation With Recursion

// Task 5 : Write a recursive function to reverse a string. Log the result for few
// testcases
const reverseString = (str) => {
    if (str.length <= 1) {
        return str
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString("kaif"));

// Task 6 : Write a recursive function to check if a string is pallindrome. Log the
// result
const palidromeCheck = (str) => {
    if (str[str.length - 1] != str[0]) {
        return false
    }
    if (str.length <= 1) {
        return true
    }
    return palidromeCheck(str.slice(1, -1))
}
console.log(palidromeCheck("5530110355"));

// Activity 4 : Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log
// the index of the target element.
const sortedArray = (arr, south, east, target) => {
    if (south > east) {
        return -1
    }
    let middleIndex = (south + east) / 2
    if (arr[middleIndex] === target) {
        return middleIndex
    }
    else if (arr[middleIndex] < target) {
        return sortedArray(arr, middleIndex + 1, east, target)
    }
    else {
        return sortedArray(arr, south, middleIndex, target)
    }
}

const binarySearch = [2, 4, 5, 6, 7, 9];
const SearchFive = sortedArray(binarySearch, 0, binarySearch.length - 1, 5)
const SearchEleven = sortedArray(binarySearch, 0, binarySearch.length - 1, 11)
console.log(SearchFive);
console.log(SearchEleven);

// Task 8 : Write a recursive function to count the occurrences of a target element in
// an array. Log the index of the target element.
const calculateTargetOccuranceCount = (array, index, target, count) => {
    if (array.length === index) {
        return count
    }
    if (array[index] === target) {
        count++
    }
    return calculateTargetOccuranceCount(array, ++index, target, count)
}

const countArray = [1, 4, 4, 5, 63, 242, 7, 7, 4, 4]
const calculateOccurance = calculateTargetOccuranceCount(countArray, 0, 7, 0)
console.log(`The count is : ${calculateOccurance}`)

// Activity 5 : Tree Traversal (Optional)

// Postponed

// Tasks Completed