// Practice Before Practice

// const imgs  = document.getElementById("img");
// imgs.addEventListener("dblclick" , () =>{
//     alert("pic clicked")
// },false)



// Challenge Started

// Activity 1 : Basic Event Handling

// Task 1 : Add a (click) event listener to a button that changes the text content 
// of a paragraph
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    button.textContent = "updated button"
});

// Task 2 : Add a (double click) event listener to an image that toggles its visiblity
const img = document.getElementById("img");
img.addEventListener("dblclick", () => {
    img.style.visibility = "hidden"
});

// Activity 2 : Mouse Events

// Task 3 : Add a (mouseover) event listener to an element that changes its background
// color
const div = document.getElementById("my-div");
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue"
});

// Task 4 : Add a (mouseout) event listener to an element that reset its background
// color
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "green"
});

// Activity 3 : Keyboard Events 

// Task 5 : Add a (keydown) event listener to an input field that logs the pressed
// to the console
const form = document.getElementById("form");
form.addEventListener("keydown" , (event) =>{
    event.preventDefault()
    console.log("kaif");
});

// Task 6 : Add a (keyup) event listener to an input field that displays the current
// value in paragraph
const p = document.querySelector("p");
form.addEventListener("keyup", (event) => {
    event.preventDefault()
    console.log(p.textContent);
});

// Activity 4 : Form Events

// Task 7 : Add a (submit) event listener to a form that prevant the defaults submission
// and log the form data to the console
const input = document.getElementById("inp");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value);
});

// Task 8 : Add a (change) event listener to a select dropdown that displays the 
// selected value in paragraph
const dropDown = document.getElementById("dropDown");
const paragraph = document.getElementById("para");
dropDown.addEventListener("change" , (e) =>{
    paragraph.textContent = `selected value : ${e.target.value}`
});