// Challenge Started : Control Structure

// Activity 1 : If-Else-Statement

// Task 1 : Write a program to chech if a number is positive , negative  , or 
// zero , and log the result to the result
let num = prompt("Enter your number");
if (num <= -0 || num === 0) {
    console.log("negative value");
} else {
    console.log("positive value");
}
// // //Task 2 : Write a program to check if a person is eligible to vote (age >= 18)
// // //and log the result to the console
let voteGoverment = prompt("Enter your age");
if (voteGoverment >= 18) {
    console.log("you have access to vote");
} else {
    console.log("you have not access to vote");
}

// Activity 2 : Nested If-Else-Statement

// Task 3 : Write a program to find the largest three numbers using nsted if-else
let large = prompt("enter you larger number");
if (large > 900) {
    if (large > 950) {
        console.log("larger number");
    }
    else {
        console.log("not larger number");
    }
}
else {
    console.log("not larger number");
}

//Activity 3 : Switch Case

// Task 4 : write a program that uses a switch case to determine the day of the week
//based on a number (1-7) and log the day name to the console
let month = +prompt("Enter your month")
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("jun");
        break;
    case 7:
        console.log("jul");
        break;
    default:
        console.log("is month not exist in present year");
}
// Task 5 : write a program to uses switch case to assign a grade (A , B , C , D , F)
//based on a score and log the grade to the console
let grade = +prompt("enter your number");
switch (true) {
    case (grade >= 80):
        console.log("your grade is A+");
        break;
    case (grade >= 70):
        console.log("your grade is A");
        break;
    case (grade > + 60):
        console.log("your grade is B");
        break;
    case (grade >= 50):
        console.log("your grade is C");
        break;
    case (grade >= 40):
        console.log("your grade is D");
        break;
    case (grade <= 39):
        console.log("beta pharai likhai pe dihan do");
        break;
}

// Activity 4 : Conditional (Ternary Operator)

// Task 6 : Write a program that uses the ternary operator to check if a number
// is even or odd and log the result to the console
let numEvenOdd = prompt("Enter your number");
let result  = `${numEvenOdd} is ${numEvenOdd % 2 === 0 ? "even" : "odd"}`
console.log(result);

// Activity 5 : Combining Conditions

// Task 7 : Write a program to check if a year is a leap year using multiple
// conditions (divisible by 4 , but not 100 unless also divisible by 400) and log
// the result to the console

const year = +prompt("Enter your year");

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is leap year`);
    } else {
      console.log(`${year} is not leap year`);
    }
  } else {
    console.log(`${year} is leap year`);
  }
} else {
  console.log(`${year} is not leap year`);
}

// Tasks Completed