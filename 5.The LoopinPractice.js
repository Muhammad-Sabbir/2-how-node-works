// // example:1
// const fs = require("fs");

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("text-file.txt", () => {
//   console.log("I/O finished");
// });

// console.log("Hello from the top-level code");

// // example:2
// const fs = require("fs");

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("text-file.txt", () => {
//   console.log("I/O finished");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   console.log("-----------------");
//   setImmediate(() => console.log("Immediate 2 finished"));
//   process.nextTick(() => console.log("Process.nextTick"));
// });

// console.log("Hello from the top-level code");

// // example:3
// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now();

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("text-file.txt", () => {
//   console.log("I/O finished");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 3000);
//   console.log("-----------------");
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
// });

// console.log("Hello from the top-level code");

// // example:4
// const fs = require("fs");
// const crypto = require("crypto");

// const start = Date.now();

// process.env.UV_THREADPOOL_SIZE = 3; // change it 1,2,3,4

// setTimeout(() => console.log("Timer 1 finished"), 0);
// setImmediate(() => console.log("Immediate 1 finished"));

// fs.readFile("text-file.txt", () => {
//   console.log("I/O finished");

//   setTimeout(() => console.log("Timer 2 finished"), 0);
//   setTimeout(() => console.log("Timer 3 finished"), 150);
//   console.log("-----------------");
//   setImmediate(() => console.log("Immediate 2 finished"));

//   process.nextTick(() => console.log("Process.nextTick"));

//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
//   crypto.pbkdf2("password", "salt", 100000, 64, "sha256", () => {
//     console.log(Date.now() - start, "password encrypted");
//   });
// });

// console.log("Hello from the top-level code");

// example:5
const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 3; // change it 1,2,3,4

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 150);
  console.log("-----------------");
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
  console.log(Date.now() - start, "password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 64, "sha256");
  console.log(Date.now() - start, "password encrypted");
});

console.log("Hello from the top-level code");
