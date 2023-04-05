// console.log(arguments);
// console.log("----------------");
// console.log(require("module").wrapper);

// // Example:2.1 module.exports
// const C = require("./test-module-1.1");
// const calc1 = new C();
// console.log(calc1.add(2, 5));

// //Example:2.2 module.exports
// const C = require("./test-module-1.2");
// const calc1 = new C();
// console.log(calc1.add(2, 5));

//// Example:2.3 module.exports
// const calc2 = require("./test-module-2.1");
// console.log(calc2.add(2, 5));
// console.log(calc2.multiply(2, 5));

// // Example:2.4 exports
// const { add, multiply, devide } = require("./test-module-2.1");
// console.log(add(2, 5));
// console.log(multiply(3, 5));

// Example:3.1
require("./test-module-3.1")();
require("./test-module-3.1")();
require("./test-module-3.1")();
