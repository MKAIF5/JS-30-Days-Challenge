// Challenge Started

// Activity 1 : For Loop

// Task 1 : Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// Task 2 : Write a program to print the multiplication table of 5 using a for loop
for (let i = 5; i <= 50; i = i + 5) {
    // console.log(i);
}

// Activity 2 : While Loop

// Task 3 : Write a program to calculate sum of numbers from 1 to 10 using a while loop
let i = 1;
let sum = 1;
while (i <= 10) {
    // console.log(sum);
    sum = sum + i
    i++;
}

// Task 4 :  Write a program to print numbers from 1 to 10 using a while loop
let j = 1;
while (j <= 10) {
    // console.log(j);
    j++
}

// Activity 3 : Do While Loop

// Task 5 : Write a program to print numbers from 1 to 5 using a do...while loop;

let k = 1;
do {
    // console.log(k);
    k++
} while (k <= 5)

// Task 6 : Write a program to calculate the factorial number using a do...while loop
let mul = 1;
let a = 1;
do {
    mul *= a
    a++;
} while (a <= 5)
// console.log(mul);

// Activity 4 : Nested Loops

// Task 7 : write a program to print a pattern using a nested for loops
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= 5; j++) {
        pattern += "*"
    }
    // console.log(pattern);
}

// Activity 5 : Loop Control Statement

// Task 8 : Write a program to print numbers from 1 to 10 but skip the 
// 5 using a continue statement
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    // console.log("5 is skipped");
}

// Task 9 : Write a program to print numbers from 1 to 10 but stop the loop when 
// the number is 7 using the break statement 
for(let i = 1; i <= 10; i++){
    if(i == 7){
        break;
    }
    console.log("loop stoped");
}