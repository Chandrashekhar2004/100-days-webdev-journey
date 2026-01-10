// function addNum(a, b){
//     return a + b;
// }

// console.log(addNum(5, 10));
// console.log(addNum(-3, 7));

// function multiplyNum(a, b){
//     return a * b;
// }   

// console.log(multiplyNum(4, 6));
// console.log(multiplyNum(-2, 8));

// dice rolling function

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log("You rolled a " + dice);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();

// calculate average of three numbers
// function calAvg (num1, num2, num3){
//     let avg = (num1 + num2 + num3) / 3;
//     return avg;
// }
// console.log(calAvg(5, 10, 15));
// console.log(calAvg(20, 30, 40));

//  function of multiplication table of a numberd
// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

// multiplicationTable(5);
// multiplicationTable(8);


// let str = ["apple", "banana", "cherry", "date", "elderberry"];

// function concat(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         result += str[i];
//     }
//     return result;
    
// }

// console.log(concat(str));


let word = "Hello";

function changeWord(){
    let word = "Goodbye";
    console.log(word);

        function innerChange(){
            console.log(word);
        }


}
console.log(word);
changeWord();