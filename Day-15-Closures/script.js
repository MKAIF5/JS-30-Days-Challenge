// Practice Before Practice

// function outer() {
//     const name = "kaif";
//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }
// const myFunc = outer();
// myFunc()

// function clickHandler(color){
// document.body.style.backgroundColor = `${color}`

//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");



// Challenge Started

// Activity 1 : Understanding Clousers

// Task 1 : Write a function that returns another function, where inner function
// accesses a variable from the outer function's scope. Call the inner function and
// log the result
function myFunc1() {
    const name = "kaif";
    function myFunc2() {
        console.log(name);
    }
    myFunc2()
}
myFunc1()

// Task 2 : Create a clouser that maintains a private counter. implement a function
// to increament and the current value of the counter
function outerCounter() {
    let counter = 0;
    function innerCounter() {
        counter++
        console.log(counter);
    }
    return innerCounter
}

const answerFunc = outerCounter();
answerFunc()

// Activity 2 : Practical Clousure

// Task 3 : Write a function that generates unique IDs: Use a clousure to keep track 
// of the last generated ID and icreament it with each call
function uniqueId() {
    let id = Math.floor(Math.random() * 1000)
    function inner() {
        id++
        console.log(`last generated id is ${id}`);
    }
    inner()
}

uniqueId()

// Task 4 : Create a clouser that captures a user's name and return a function that 
// greets the user by name.
function outerGreet() {
    const greets = "Mohammad Kaif"
    function innerGreet() {
        console.log(`Welcome ${greets}`);
    }
    innerGreet()
}

outerGreet()

// Activity 3 : Clousers in Loops

// Task 5 : Write a loop that creates an array of functions. Each function should
// log its index when called. Use a closure to ensure each function logs 
// the correct index.
const arr = [];

for (let i = 0; i <= 10; i++) {
    arr.push(
        function () {
            return function () {
                console.log(`function ${i + 1}  index is ${i}`);
            }
        }
    )
}

arr.map(func => func()())

// Activity 4 : Module Pattern

// Task 6 :Use closures to create a simple module for managing a collection of items.
// Implement methods to add, remove, and list items.
function itemManager() {
    const itemsArr = [];

    function addItem(item) {
        itemsArr.push(item);
        console.log(`Item ${item} has been added`);
    }

    function removeItem(item) {
        const index = itemsArr.indexOf(item);
        if (index > -1) {
            itemsArr.splice(index, 1);
            console.log(`${item} has been removed`);
        } else {
            console.log(`${item} didn't found in collection`);
        }
    }

    function getItem() {
        if (itemsArr.length == 0) {
            console.log("The collection is empty");
        } else {
            console.log(`Items present in the collection are as follows : `);
            itemsArr.map((item, index) => {
                console.log(`Item ${index + 1} => ${item}`);
            })
        }
    }

    return { addItem, removeItem, getItem };
}

const itemModule = itemManager();

itemModule.addItem(23); 
itemModule.addItem(60); 
itemModule.addItem(1); 
itemModule.addItem(43);


itemModule.removeItem(1); 
itemModule.removeItem(10); 

itemModule.getItem();