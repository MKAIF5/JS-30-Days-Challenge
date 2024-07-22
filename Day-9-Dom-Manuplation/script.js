// Practice Before Challenge

// let getTag = document.getElementById("title")
// let getId = document.getElementById("title").id
// let getClass = document.getElementById("title").className
// console.log(getTag);
// console.log(getId);
// console.log(getClass);

// let parent = document.querySelector(".parent");
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//    console.log(parent.children[i].innerHTML);

// }

// console.log(parent.firstElementChild.innerHTML);
// console.log(parent.lastElementChild.innerHTML);

// const dayMonday = document.querySelector(".day");
// console.log(dayMonday.parentElement);
// console.log(dayMonday.nextElementSibling.innerHTML);

// console.log("NODES" , parent.childNodes);

// const div = document.createElement("div");
// div.className = "main";
// div.id = Math.ceil(Math.random() * 10);
// div.setAttribute("title", "title");
// div.style.backgroundColor = "green";
// div.style.padding = "13px"
// // div.innerText = "my div";
// const addTextDiv = document.createTextNode("my div");
// div.appendChild(addTextDiv);
// document.body.appendChild(div)

// function addlanguage(langname) {
//     const li = document.createElement("li");
//     li.innerHTML = langname
//     document.querySelector(".language").appendChild(li)
// }
// addlanguage("python")
// addlanguage("typescript")

// function addopilang(langname) {
//     const li = document.createElement("li");
//     const addText = document.createTextNode(langname);
//     li.appendChild(addText);
//     document.querySelector("ul").appendChild(li)
// }
// addopilang("ruby")

// Edit
// const secondlang = document.querySelector('li:nth-child(4)');
// let newLi = document.createElement("li");
// newLi.textContent = "java";
// secondlang.replaceWith(newLi)
// const firstLang = document.querySelector("li:first-child");
// firstLang.innerText = "javascript"

// remove

// const lastLang = document.querySelector("li:last-child");
// lastLang.remove()



// Challenge Started

// Activity 1 : Selecting and Manuplating Elements

// Task 1 : Select and html element by its id and change its text content
document.getElementById("change-1").innerText = "javascript";

// Task 2 : Select and html element by its class and change its background color
document.getElementsByClassName("abc")[0].style.backgroundColor = "green";

// Activity 2 : Creating and Appending Elements

// Task 3 : Create a new (div) elements with some text content and append its body
const div = document.createElement("div");
div.textContent = "my div"
document.body.appendChild(div);

// Task 4 : Create a new (li) element and add it to existing (ul) list
const li = document.createElement("li");
li.textContent = "my li";
const ul = document.querySelector("ul");
ul.appendChild(li)
document.body.appendChild(ul)

// Activity 3 : Removing Elements 

// Task 5 : Select and html element and remove it from the DOM
li.remove()

// Task 6 : Remove the last child of a specific element html element
const uls = document.querySelector(".ul");
uls.lastElementChild.remove()

// Activity 4 : Modifying Attributes and Classes

// Task 7 : Select and html element and change one of its attributes (e.g,, src of and
// img tag )
const img = document.querySelector("img")
img.setAttribute("src", "https://www.youtube.com/");

// Task 8 : Add and remove a CSS class to/from an html element
const add = document.querySelector(".abc");
add.setAttribute("style" , "padding:20px; color:green");
document.body.appendChild(add);
add.remove()