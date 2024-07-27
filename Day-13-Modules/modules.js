import { func, user, add, mul, div , min } from "./script.js";
console.log(func(2, 5));
console.log(user.isLogged);
console.log(add(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));
console.log(min());

import * as All from "./module.js";

console.log(All.add(3, 5));

console.log(All.Person["College"]);