// Practice Before Challenge

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     changePassword() {
//         return `${this.password}89`
//     }
// }

// const getUser = new User("kaif", "kaif@test.com", "1234567");

// console.log(getUser.changePassword());

// inheritance class

// class User {
//     constructor(username) {
//         this.username = username;
//     }
//     logMe() {
//        console.log(`Username is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username , email , password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addCourse(){
//         console.log(`add new course is ${this.username}`);
//     }
// }

// const getUsers = new Teacher("webDevelpment" , "kaif@coding.com" , "1234567");

// getUsers.addCourse()

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
const getPersons = new Persons("kaif",);
console.log(getPersons.changeAge());

// Activity 2 : Class Inheritance

// Task 3 : Define a class student that extends a person class. Add a property studentId
// and a method to return student ID. Create an instance of the class class and log the
// student ID.
class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.studentId = id;
  }
  getStudentId() {
    return this.studentId;
  }
}
const getId = new Student("kaif", 30, 2);
console.log("Student ID of kaif", getId.getStudentId());
console.log("Greet kaif", getId.greet());

// Task 4 : Override the greeting method in the student class to include the student Id
// in the message. Log the ovveriden greeting message
Student.prototype.greet = function () {
    return `Welcome ${this.name} Id:(${this.studentId})`;
  };
  console.log("Greet kaif", getId.greet());
  console.groupEnd();   
