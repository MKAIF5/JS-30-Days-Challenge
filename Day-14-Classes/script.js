// Practice Before Challenge

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    changePassword() {
        return `${this.password}89`
    }
}

const getUser = new User("kaif", "kaif@test.com", "1234567");

console.log(getUser.changePassword());





// Challenge Started

// Activity 1 : Class Defination

// Task 1 : Define a class Person with properties name and age , and a method to 
// return a greeting message. Create an instance of the class and log the greeting
// message 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greetingMessage() {
        return `${this.name} welcome`
    }
}

const getPerson = new Person("kaif", 15);
console.log(getPerson.greetingMessage());

// Task 2 : Add a method to the Person that updates that updates age property and log 
// the updated age
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greetingMessage() {
        return `${this.name} welcome`
    }
    changeAge() {
        return `${this.age}15`
    }
}
const getPersons = new Persons("kaif" , );
console.log(getPersons.changePassword());