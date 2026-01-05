// // odd numbers
// console.log("Odd Numbers");
// for (let i =1; i <=15; i = i+2) {
//     console.log(i);
// }
// console.log("Reverse Odd Numbers");
// for(let i = 15; i >= 1; i = i-2){
//     console.log(i);
// }
// // even numbers
// console.log("Even Numbers");
// for (let i =2; i <=10; i = i+2) {
//     console.log(i);
// }
// console.log("Reverse Even Numbers");
// for(let i = 10; i >= 2; i = i-2){
//     console.log(i);
// }
// // multiples of 5
// for(let i=1; i<=10; i++){
//     console.log(i*6);
// }

// // while loop
// console.log("while loop output:");
// let j = 2;
// while(j <= 30){
    
//     console.log(j);
//     j= j + 2;
// }

// guess my favorite movie
// const favoriteMovie = "Animal";
// let Guess = prompt("Guess my favorite movie:");
// while(Guess !== favoriteMovie){
//     if(Guess == "quit"){
//         console.log("you choose to quit.");
//         break;
//     }
//     console.log("Wrong guess! Try again.");
//     Guess = prompt("Guess my favorite movie:");
// }

// if(Guess === favoriteMovie){
//     console.log("Congratulations! You guessed it right.");
// }

// loops in nested array
let students = [
    ["Alice", 85, 90, 78],
    ["Bob", 92, 88, 95],
    ["Charlie", 79, 85, 80] 
];
for(let i=0; i < students.length; i++){
    console.log(`student ${i+1}:`);
    for(let j=0; j < students[i].length; j++){
        console.log(students[i][j]);
    }
}