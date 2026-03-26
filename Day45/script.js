// Q1 = check palindrome

function checkPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("Hello"));

// Q2 = count vowels

function countvowel(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}
// console.log(countvowel("Hello"));

// Q3 = random number generator 

function randomNum() {
    let num = Math.floor(Math.random() * 100 + 1);

    return num;
}
// console.log(randomNum());

// Q4 =  function to change temperature C → F 

function cToF(celsius) {
    return (celsius * 9 / 5) + 32;

}
// console.log(cToF(0));   
// console.log(cToF(25));

// Q5 = sum of array

let arr = [5, 6, 5, 7, 7, 3, 9, 2, 18, 2];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
// console.log(sum);

// Q6 = largest number in array

let largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }

}
// console.log(largest);

// Q7 = reverse the array
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
// console.log("original array :",arr);
// console.log("reversed array :",reversed);

// Q8 = find duplicate values

let unique = [];
for (let i = 0; i <= arr.length; i++) {
    if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
    }
}
// console.log(unique);

// Q9= sort element in ascending order

let newArr = arr.sort((a, b) => a - b);
// console.log(newArr);

// Q10 = find even element in array
let even = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    }
}
// console.log(even);

// Q11 = double the array element using map function

let doubleArr = arr.map((num) => num * 2);
// console.log(doubleArr);

// Q12 = search element in array

let element = 9;
let found = false;
for (let i = 0; i < arr.length; i++) {
    if(element === arr[i]){
        found = true;
        break;
    }
}
// if(found){
//     console.log("element exist in array");
// }
// else{
//     console.log("element does not exist in array");
// }

// Q13 = merge two array

let arr1 = [2,3,5,7,8];
let arr2 = [4,6,5,8,9];

let mergeArr = [...arr1 , ...arr2];
// console.log(mergeArr);  

