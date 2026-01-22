const student = {
    name: "John Doe",
    age: 20,
    eng: 85,
    math: 90,
    science: 78,
    avgMarks: function () {
        let avg = (this.eng + this.math + this.science) / 3;
        console.log(avg);
    },

}
// student.avgMarks();

// *****************************************************************
// // practice question 1

let arr = [7, 9, 0 - 2];

let n = 3;

let ans = arr.slice(0, n);
console.log(ans);
// for(let i=0; i<n; i++){
//     if(arr[i]===n){
//         break
//     }
//     else{
//         console.log(arr[i]);
//     }
// }
// // **********************************************************
// // practice question 2
let result = arr.slice(arr.length - n);
console.log(result);

// // **********************************************************
// // practice question 3

 let strr = "abcdef";


if (strr === '') {
    console.log("Empty String");
}
else {
    console.log("sting is not empty");
}

// // let str = prompt("Enter a string: ");

// // if (str.length === 0) {
// //     console.log("Empty String");
// // } else {
// //     console.log("String is not empty");
// // }

// // **********************************************************
// // practice question 4

// // let string = prompt("enter a string");

// // let trimmedString = string.trim();
// // console.log(trimmedString);
// // console.log(string)

// // **********************************************************
// // practice question 5

let str = "ApnaCollege";
let idx = 3
if (str[idx] == str[idx].toLocaleLowerCase()) {
    console.log("character is lowercase")
}else{
    console.log("character is not lowercase")
}

// // ***********************************************************

// // practice question 6

let arr2 = [2, 5, 8, 9, 16, 15, 45, 51];
let num = 8;
// let found = false
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] == num) {
//         found = true;
//         break;
//     }
// }
// if(found){
//     console.log("element exists in array");
// }
// else{
//     console.log("element is not exists");
// }

if(arr2.indexOf(num) != -1){
    console.log("element exists in array");
}else{
    console.log("element is not exists");
}


// **************************************************************************************

// practice questions

let Arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] == num) {
//         Arr.splice(i, 1)
//     }
// }
// console.log(Arr);


// practice question 2

let number = 287152;
let copy = number;
// let count= 0;

// while(copy > 0 ){
//     count++;
//     copy =Math.floor(copy/10);
// }
// console.log(count);

// let sum = 0;
// while(copy > 0){
//     digit = copy % 10;
//     sum = sum + digit;
//     copy =Math.floor(copy/10);
// }
// console.log(sum);
// **********************************************************************
// let num = +prompt("enter a number");
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//     fact = fact * i;

// }
// console.log(fact);
// ****************************************************************
let largest = 0;
for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > largest) {
        largest = Arr[i];
    }
}
console.log(largest);