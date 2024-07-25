// Parctice Before Challenge

// const promiseOne = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("kaif");
//     }, 1000)
//     resolve()
// });
// promiseOne.then(() => {
//     console.log("resolve run...");
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1, 2, 3, 4, 5])
//     }, 1000)
// }).then((user) => {
//     console.log(user);
// })


// const promisesOne = new Promise((resolve, reject) => {
//     let error = false;
//     if (!error) {
//         resolve({ username: "kaif", password: 123 })
//     }
//     else {
//         reject("something went wrong")
//     }
// })

// promisesOne.then((user) => {
//     console.log(user)
//     return user.password
// }).then((get) => {
//     console.log(get);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("the promises resolved and rejected");
// })


// const promisePrac = new Promise((resolve, reject) => {
//     let error = false;
//     setTimeout(() => {
//         if (!error) {
//             resolve("correct resolved")
//         }
//         else {
//             reject('something went wrong')
//         }
//     }, 1000);
// })
// async function PromiseConsumed() {
// try {
//     const response = await promisePrac;
//     console.log(response);
// } catch (error) {
//     console.log(error);
// }
// const response = await promisePrac;
// console.log(response);
// }
// PromiseConsumed()

// async await (fetch)

// async function getUsers() {
//     try {
//         const response = await fetch("https://api.github.com/users/mkaif5");
//         const data = response.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }
// getUsers()

// .then and .catch (fetch)

// fetch("https://api.github.com/users/mkaif5")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




// Challenge Start

// Activity 1 : Understanding Promises

// Task 1 : Create a promise that resolves with a message after a 2 second timeout
// and log the message to the console
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("run message ...");
        resolve()
    }, 2000)
})
// console.log(promiseOne);

// Task 2 : Create a promise that rejects with an error message after a 2 second 
// timeout and handle the using (.catch)
const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("incorrect")
    }, 2000);
})
try {
    promiseTwo.then((resp) => {
        // console.log(resp);
    })
        .catch((err) => {
            // console.log(err);
        })
} catch (error) {
    // console.log(error);
}

// Activity 2 : Chaining Promise

// Task 3 : Create a squence promise that simulate fetching data from a server .
// chain the promises to the log message in a specific order
fetch("https://api.github.com/users/mkaif5")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
