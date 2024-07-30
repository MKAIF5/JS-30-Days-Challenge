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
function myFunc1(){
    const name = "kaif";
    function myFunc2(){
     console.log(name);
    }
    myFunc2()
}
myFunc1()

// Task 2 : Create a clouser that maintains a private counter. implement a function
// to increament and the current value of the counter

function outerCounter(){
    let counter = 0;
    function innerCounter(){
       counter++
       console.log(counter);
    }
   return innerCounter
}

const answerFunc = outerCounter();
answerFunc()