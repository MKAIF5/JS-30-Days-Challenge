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