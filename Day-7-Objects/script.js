// Challenge Started 

// Activity 1 : Object Creation And Access

// Task 1 : Create an object repreasenting a book with properties like title 
// author and year, and log the object to the console
const books = {
    title: "history",
    author: "science",
    year: 2000
}
console.log(books);

// Task 2 : Access and log the title and author properties of the book object
console.log(books.title);
console.log(books.author);

// Activity 2 : Object Methods

// Task 3 : Add a method to the book object that returns a string with book's
// title and author, and log the result of calling this method
console.log(books["title"]);
console.log(books["author"]);

// Task 4 : Add a method to the book object that takes a paremeter (year) and updates 
// the books year property , then log the updated object

books.setYear = function (updateYear){
    this.year = updateYear;
}
books.setYear(2003)
console.log(books);