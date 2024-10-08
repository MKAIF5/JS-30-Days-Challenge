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

// const promises_1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promsise 1")
//     }, 1000);
// })

// const promises_2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promsise 2")
//     }, 1000);
// })

// const promises_3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promsise 3")
//     }, 1000);
// })

// Promise.all([promises_1, promises_2, promises_3])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log("ERROR ", error);
//     })



// Challenge Start

// Activity 1 : Understanding Promises

// Task 1 : Create a promise that resolves with a message after a 2 second timeout
// and log the message to the console
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("run message ...");
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
        console.log(resp);
    })
        .catch((err) => {
            console.log(err);
        })
} catch (error) {
    console.log(error);
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

// Activity 3 : Using Async / Await

// Task 4 : Write an (async) function that waits for a promise to resolve and then logs
// the resolved value
const promiseResloved = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("resolved run ...")
    }, 1000);
})

async function promiseConsumedResolved() {
    const response = await promiseResloved;
    console.log(response);
}
promiseConsumedResolved()

// Task 5 : Write an (async) function that handles a rejected promise using (try-catch) 
// and logs the error message 
const promiseConsumed = new Promise((resolved, reject) => {
    let error = true
    if (!error) {
        setTimeout(() => {
            resolved("resolved run ...")
        }, 1000);
    }
    else {
        reject("something went wrong ....")
    }
})

async function promiseConsumedOne() {
    try {
        const response = await promiseConsumed
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
promiseConsumedOne()

// Activity 4 : Fetching Data from an API

// Task 6 : Use the (fetch) API to get the data from public a API and log the response
// data to the console using promises
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

// Task 7 : Use the (fetch) API to get the data from public a API and log the response
// data to the console using async/await
const getFetchData = async () => {
    try {
        const response = await fetch("https://api.github.com/users/mkaif5")
        const data = response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getFetchData()

// Activity 5 : Concurrent promises

// Task 8 : Use (Promise.all) to wait for multiple promsies to resolve and then log
// all thier values .
const promiseOnes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise one")
    }, 1000);
})

const promiseTwos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise two")
    }, 1000);
})

const promiseThrees = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise three")
    }, 1000);
})

Promise.all([promiseOnes, promiseTwos, promiseThrees])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

// Task 9 : Use (promise.race) to log the value of the first promise that resolve among
// multiple promises
Promise.race([promiseOnes, promiseTwos, promiseThrees])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// Tasks Completed 