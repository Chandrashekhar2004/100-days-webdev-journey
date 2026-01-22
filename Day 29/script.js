// let object = {
//     add : function(a,b){
//         return a + b;
//     },
//     sub : function(a,b){
//         return a - b;
//     },
//     mul : function(a,b){
//         return a * b;
//     }
// }

// // object.add(5, 3); 

// const object2 = {
//     add (a, b){
//         return a + b;
//     },
//     sub (a, b){
//         return a - b;
//     },
//     mul (a, b){
//         return a * b;
//     }
// }
// // object2.add(5, 3);

// console.log(object.add(5, 3)); 

// ****************************************************************
// find larger number in array than given number
// let arr = [1, 2, 3, 4, 5];

// let num = 3;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//         console.log("Found", arr[i]);
//     }
// }

// function getElement(arr, num){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= num) {
//             console.log(arr[i]);
//         }
//     }
// }
// ***********************************************************
// extract unique characters from string
// let str = "abcdabcdefgggh";

// let uniqueChars = "";
// for (let i = 0; i < str.length; i++) {
//     if (!uniqueChars.includes(str[i])) {
//         uniqueChars += str[i];
//     }

// }
// console.log(uniqueChars);
// ************************************************************
// return largest string from array

let county = ["india", "australia", "united states of america", "pakistan"];

// let largest = "";
// for (let i = 0; i < county.length; i++) {
//     if (county[i].length > largest.length) {
//         largest = county[i];
//     }
// }
// console.log(largest);

function getLargestString(arr) {
    let largest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largest.length) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(getLargestString(county));

// ************************************************************


//  count vowels in string

let str = "hello world";
let count = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++;
    }
}
console.log(count);

function countVowels(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'){
            count++;
        }   
    }
    return count;
}
console.log(countVowels("javascript"));
// ************************************************************

//  generate a random number within a range without function

let min = 1;
let max = 10;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

function generateRandomNumber(min, max){
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}
console.log(generateRandomNumber(5, 15));