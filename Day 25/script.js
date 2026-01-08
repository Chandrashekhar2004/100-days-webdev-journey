// let studentInfo = [
//     {
//         name: "Chandrashekhar",
//         age: 24,
//         city: "Pune"
//     },
//     {
//         name: "Aman",
//         age: 25,
//         city: "Mumbai"
//     },
//     {
//         name: "Vaibhav",
//         age: 26,
//         city: "Nagpur"
//     }
// ];

// console.log(studentInfo[1].name);
// console.log(studentInfo[0].gender = "Male");
// console.log(studentInfo[1].gender = "Male");
// console.log(studentInfo[2].gender = "Male");
// console.log(studentInfo);


// // generate random no between 1 to 10

// let num = Math.random();

// num = num * 10;
// num = Math.floor(num) + 1;
// console.log(num);

// // generate random no between 1 to 100 in single line
// let num2 = Math.floor(Math.random() * 100) + 1;
// console.log(num2);

// // generate random no between 1 to 5 in single line

// let num3 = Math.floor(Math.random() * 5) + 1;
// console.log(num3);

//  Number guessing game

let num = parseInt(prompt("Enter a max number"));

let randomNum = Math.floor(Math.random() * num) + 1;

let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("You quit the game");
        break;
    }
    if (guess == randomNum) {
        console.log("Congratulations! You guess correct", randomNum);
        break;
    }
    else if (guess < randomNum) {
        guess = prompt("hint : Your guess is too low");
    }
    else {
        guess = prompt("hint : Your guess is too high");
    }
}



