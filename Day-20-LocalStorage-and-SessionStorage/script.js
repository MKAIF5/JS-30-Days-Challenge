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

const saveLocalStorage = localStorage.setItem( "user", JSON.stringify(user));
// console.log(JSON.parse(saveLocalStorage));
console.log(saveLocalStorage);


