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


// class User1 {
//     constructor(username) {
//         this.username = username
//     }
//     logMe() {
//         return `Username is : ${this.username}`
//     }

//      static createID() {
//         return "123"
//     }
// }

// const getUserId = new User1("kaif");
// console.log(getUserId.createID())


// class Teachers extends User1{
//     constructor(username , email){
//         super(username)
//         this.email = email
//     }
// }

// const supra = new Teachers("supra" , "supra@supra.com");
// console.log(supra.logMe());



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

// Activity 3 : Static Methods and Properties

// Task 5 : Add a static method to the person class that return a generic greeting 
// message. call this static method without creating an instance of the class and log 
// the message 
class Persons {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
  static  greetingMessage() {
        return `${this.name} welcome`
    }
    changeAge() {
        return `${this.age}15`
    }
}

// Task 6 : Add a static property to a student class to keep track of the number of 
// students created. increament this property in the constructor and log the total 
// number of students
class Student2 extends Person2 {
    static countStudents = 0;
    constructor(name, age, id) {
      super(name, age);
      this.studentId = id;
      Student2.countStudents++;
    }
  
    getStudentId() {
      return this.studentId;
    }
  }
  const arham = new Student2("arham", 18, 3);
  const imran = new Student2("imran", 22, 5);
  const salman = new Student2("salman", 28, 7);
  console.log(`No.of students => ${Student2.countStudents}`);
  console.groupEnd();

// Activity 4 : Getters and Setters

// Task 7 : Add a getter method to the Person class to return the full name (assume 
// a firstName and lastName property) Create an instance and log the full name using
// the getter
Person2.prototype.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  const vaibhav = new Person2("Vaibhav", 26, "Kumar");
  console.log("Full name is ", vaibhav.getName());  

// Task 8: Add a setter method to the Person class to update the name property 
//(firstName and lastName). Update the name using the setter and log the updated 
// full name.
Person2.prototype.setFirstName = function (first) {
    this.firstName = first;
  };
  Person2.prototype.setLastName = function (last) {
    this.setLastName = last;
  };
  mubashir.setFirstName("abdullah");
  mubashir.setLastName("asim");
  console.log("Full name is ", mubashir.getName());
  console.groupEnd();

// !Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to 
// deposit and withdraw money. Ensure that the balance only be updated through these 
// methods.

// postponed

// Tasks Completed