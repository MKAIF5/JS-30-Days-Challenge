// Challenge Started

// Activity 1 : Creating and exporting Modules

// Task 1 : Create a module that exports a function to add two numbers. import and 
// use this module in another script
const func = function addtwo(n1 , n2){
    return n1 + n2
}

export {func};

// Task2 : Create a module that exports an object representing a person with Properties
// and method. import and use this modules in anothor scripts.
const user = {
    name: 'kaif',
    age: 15,
    isLogged: true
};
export {user};