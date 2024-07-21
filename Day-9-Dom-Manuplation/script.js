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

function addlanguage(langname) {
    const li = document.createElement("li");
    li.innerHTML = langname
    document.querySelector(".language").appendChild(li)
}
addlanguage("python")
addlanguage("typescript")

function addopilang(langname) {
    const li = document.createElement("li");
    const addText = document.createTextNode(langname);
    li.appendChild(addText);
    document.querySelector("ul").appendChild(li)
}
addopilang("ruby")

// Edit
const secondlang = document.querySelector('li:nth-child(4)');
let newLi = document.createElement("li");
newLi.textContent = "java";
secondlang.replaceWith(newLi)
const firstLang = document.querySelector("li:first-child");
firstLang.innerText = "javascript"

// remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove()



// Challenge Started