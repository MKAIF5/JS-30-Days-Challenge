// Challenge Started 

// Activity 1 : Object Creation And Access

// Task 1 : Create an object repreasenting a book with properties like title 
// author and year, and log the object to the console
const books = {
    title: "history",
    author: "science",
    year: 2000
}
// console.log(books);

// Task 2 : Access and log the title and author properties of the book object
// console.log(books.title);
// console.log(books.author);

// Activity 2 : Object Methods

// Task 3 : Add a method to the book object that returns a string with book's
// title and author, and log the result of calling this method
// console.log(books["title"]);
// console.log(books["author"]);

// Task 4 : Add a method to the book object that takes a paremeter (year) and updates 
// the books year property , then log the updated object

books.setYear = function (updateYear) {
    this.year = updateYear;
}
books.setYear(2003)
// console.log(books);

// Activity 3 : Nested Object

// Task 5 : Create a nested object representing a library with properties like 
// name name and books (an array of book object), and log the library object
// to the console
const library = {
    books: [
        {
            title: "harry porter",
            author: "kisi ne bhi",
            year: 2009
        },
        {
            title: "48 law power",
            author: "kisi ne bhi",
            year: 2000

        },
        {
            title: "smarter way to lern javascript",
            author: "kisi ne bhi",
            year: 2015
        }
    ]
}
console.log(library);

// Task 6 : Access and log the name of the library and the titles of all the
// books in the library
library.books.map((e) => {
    console.log(e.title);
})

// Activity 4 : The (This) Keyword

// Task 7 : Add a method to book object that uses the (this) keyword to return a
// string with the book's title and year, and log the result of calling this method
books.kuchbhi = function kuchbhi() {
    return `${this.title} ${this.year}`
}
console.log(books.kuchbhi());