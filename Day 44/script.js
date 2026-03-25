// Q1 = sum function 

function sum(a, b) {
    return a + b;
}
// console.log(sum(5, 7));

const sum2 = (a, b) => a + b;
// console.log(sum(5 , 6));


//Q2 = check the no is even or odd 



function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
// console.log(checkEvenOdd(4));

// Q3 = find largest in three no



function checkLargest(a, b, c) {
    if (a > b && a > c) {
        return "A is largest";
    }
    else if (b > c) {
        return "B is largest";
    } else {
        return "C is largest";
    }
}
// console.log(checkLargest(40,5,7));


// Q4 = find factorial 

function findFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
// console.log(findFactorial(5));

// Q5 = reverse a string

let str1 = "college";
let reverseStr1 = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reverseStr1 += str1[i];
}
// console.log(reverseStr1);

function reverseStr(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseStr("ApnaCollege"));

