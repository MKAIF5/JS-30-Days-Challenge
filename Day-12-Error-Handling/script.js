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
        if (num1 === 0) {
            throw new Error("cannot divided by zero")
        }
    } catch (error) {
        // console.log(error);
    }
    return num1 / num2
}
// console.log(func2(10 , 5));   

// Activity 2 : Finally Block

// Task 3 : Write a scripts that includes a try/catch block and a finally block. log
// messages in the try/catch and finally blocks to observe the execution flow
try {
    // console.log(kaif);

} catch (error) {
    // console.log(error);
} finally {
    // console.log("try and catch resolved aur rejected");
}

// Activity 3 : Custom Error Objects

// Task 4 : Create a custom error class that extends the built in error class. throw
// and instance of this custom error in a function  and handle it using a try-catch
// block
class CustomError extends Error {
    constructor(message) {
        supper(message);
        this.name = "CustomError";
    }
}
function throwErrorFunction() {
    throw new CustomError('This is a custom error message.');
}

try {
    throwErrorFunction();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an unexpected error:", error)
    }

}

// Task 5 : Write a function that validates user input (e.g , checking if a string is
// not empty) and throws a custom errors if the validation fails . handle the custom
// error using a try-catch block
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function checkStringFun(input) {
    if (!input || typeof input !== "string" || input.trim() === "") {
        throw new ValidationError("Invalid input: input must be a non-empty string.");
    }
    return true;
}

try {
    checkStringFun("");
    console.log("Input is valid.")
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation error:", error.message);
    } else {
        console.log("An unexpected error occured: ", error);
    }
}

// Activity 4 : Error Handling in Promises

// Task 6 : Create a promises that randomly resolves or rejects use (.catch) to handle 
// the rejection and log an apporpriate message to the console
const promisesErr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("rejection")
    }, 1000);
})
    .then((resp) => {
        console.log(resp);
    })
    .catch((error) => {
        console.log(error);
    })

// Task 7 : Use Try/Catch With an async function to handle errors from a promise that
// randomly resolves or rejects , and log the error message
async function handleErrors() {
    try {
        await new Promise((resolve, reject) => {
            let error = false;
            setTimeout(() => {
                if (!error) {
                    resolve("error is not defined");
                }
            }, 1000);
            setTimeout(() => {
                reject("error is defined")
            }, 1000);
        })
    } catch (error) {
        console.log(error);
    }
}
console.log(handleErrors())