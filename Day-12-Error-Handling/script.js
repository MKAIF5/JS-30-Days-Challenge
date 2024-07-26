// Practice Before Challenge

// try {
//     throw new Error("kaif nhi hai is code mai")
//     console.log(kaif);
// } catch (error) {
//     console.log(error);
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);
// }



// Challenge Started

// Activity 1 : Basic Error Handling with Try/Catch

// Task 1 : Write a function that intentionally throwns an error and use a try catch
// block to handle the error and log an appropriate message to the console
const func = () => {
    try {
        // console.log(kaif);

    } catch (error) {
        // console.log(error);
    }
}
func()

// Task 2 : Create a function that divides two numbers and throwns an error if the 
// denominator is zero . use a try catch block to handle this error
const func2 = (num1, num2) => {
    try {
        if (num1 === 0 ) {
            throw new Error("cannot divided by zero")
        }
    } catch (error) {
        // console.log(error);
    }
    return num1 / num2
}
// console.log(func2(10 , 5));   