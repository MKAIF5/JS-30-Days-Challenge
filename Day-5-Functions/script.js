// Practice before challenge

// function addTwoNumbers(num1 , num2){
//    console.log(num1 * num2);
// }

// function addTwoNumbers(num1, num2) {
//     return num1 + num2
// }
// console.log(addTwoNumbers(5, 5));

// function userLoggin(username = "sam"){
//     if(!username){
//       console.log("please enter a user name");
//       return
//     }
//     return `${username} logged in`
// }
// console.log(userLoggin());

// function addTwoNumbers(...cart){
//   return cart
// }
// console.log(addTwoNumbers(100 , 500 , 657 , 364));

const myObj =  {
    userName: "kaif",
    age : 15,
    loggedIn: true
};

function getObj(anyobject){
    console.log(`username is ${anyobject.userName} age is ${anyobject.age} and loggin is ${anyobject.loggedIn}`);
}
getObj(myObj)