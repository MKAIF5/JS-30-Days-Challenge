// Practice Before Challenge

// let key  = prompt("Enter your key you want to set");
// let value = prompt("Enteryour value you want to set");

// localStorage.setItem(key , value)

// console.log(`The value is ${key} is ${localStorage.getItem(key)}`);

// if(key == "red" || key =="blue"){
//     localStorage.removeItem(key)
// }

// if(key == 0){
//     localStorage.clear()
// }

// const button = document.getElementById("clicked");
// const input = document.getElementById("inp");
// const span = document.getElementById("span"); 

// button.addEventListener("click", () => {
//     const value = input.value;
//     localStorage.setItem("name" , value)
//     const getLocalStorageValue = localStorage.getItem("name");
//     span.innerText = getLocalStorageValue
// })

// window.addEventListener("load" , () =>{
// })





// Challenge Started

//  Activity 1 : Understanding LocalStorage

// Task 1 : Write a script to save a string value to `localStorage` and retrieve it. 
// Log the retrieved value
const keyValue = localStorage.setItem("name", "kaif");
console.log(keyValue);

// Task 2 : Write a script to save an object to `localStorage` by converting it to a
// JSON string. Retrieve and parse the object, then log it.

const user = {
    name: "kaif",
    age: 15,
    location: "karachi",
    isLogginUser: true
}

const saveLocalStorage = localStorage.setItem("user", JSON.stringify(user));
// console.log(JSON.parse(saveLocalStorage));
console.log(saveLocalStorage);

// Activity 2 :  Using LocalStorage

// Task 3 : Create a simple form that saves user input (e.g., name and email) to 
// "localStorage" when submitted. Retrieve and display the saved data on page load.
const button = document.querySelector("#btn");
const names = document.querySelector("#name");
const email = document.querySelector("#email");

button.addEventListener("click", (event) => {
    const nameValue = names.value;
    const emailValue = email.value;
   
    localStorage.setItem("name" , nameValue)
    localStorage.setItem("email" , emailValue)
})

// Task 4: write a script to remove an item form localstorage. log the localstorage
// content before and after removel;
let beforeRemove = () =>{
    localStorage.setItem("job1" , "javascript with react");
    localStorage.setItem("job2" , "python with djanngo");
    console.log(`before remove ${localStorage.getItem("job1")} , ${localStorage.getItem("job2")}`);
}

beforeRemove()

let prom = prompt("enter your choice");

if(prom === "js with react"){
    localStorage.removeItem("job2")
}

else if(prom === "pyt with django"){
    localStorage.removeItem("job1")
}

else{
    alert("dosen't match in job")
}