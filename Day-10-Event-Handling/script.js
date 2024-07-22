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