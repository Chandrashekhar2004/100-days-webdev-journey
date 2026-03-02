// // Arrow function
// const sum = (a, b) => {
//     console.log(a + b);
// }

// sum(5, 10);

// const cube = (n) => {
//     return n * n * n;
// }

// console.log(cube(3));

// const mul = (a, b) => (
//     a * b
// );
// console.log(mul(4, 5));


// // Settimeout functions

// console.log("Hi there!");

// setTimeout(() => {
//     console.log("Apna College");  
// }, 4000);

// console.log("Welcome to");

// // setInterval functions

// let id =setInterval(() => {
//     console.log("This is setInterval function");
// }, 2000);

// clearInterval(id);



// // let id = setInterval(() => {
// //     console.log("This is setInterval function");
// // }, 2000)

// // setTimeout(() => {
// //     clearInterval(id);
// // }, 10000);



// let arrayAverage = (arr) => {
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//     }
//     return average / arr.length;
// }

// console.log(arrayAverage([1, 2, 3, 4, 5]));


// let isEven = (n) => {
//     return n % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));

const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
}; 
setTimeout(object.logMessage, 1000);