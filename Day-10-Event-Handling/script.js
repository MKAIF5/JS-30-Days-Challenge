// Challenge Started

// Activity 1 : Basic Event Handling

// Task 1 : Add a click event listener to a button that changes the text content 
// of a paragraph
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    button.textContent = "updated button"
}) 

// Task 2 : Add a double click event listener to an image that toggles its visiblity
const img  = document.getElementById("img");
img.addEventListener("dblclick" ,  () =>{
   img.style.visibility = "hidden"
})