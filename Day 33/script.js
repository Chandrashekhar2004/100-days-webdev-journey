let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8];
// console.log(newArr);


// new arr with 5 added to each element
let nerArr1 = arr.map(arr => arr + 5);
console.log(nerArr1);


// find the square and sum of the array element then find the average of the array element
const squared = arr.map(num => num * num);
const sum = squared.reduce((acc, curr) => acc + curr, 0);
const average = sum / arr.length;

console.log("Squared Array:", squared);
console.log("Sum:", sum);
console.log("Average:", average);

const data = {
    email: "chandu@gmail.com",
    pass: "abcd"
};

const dataCopy = { ...data, id: 123 };

// console.log(dataCopy);

const data1 ={
    name: "chandu",
    age: 25
};

const data2 = {
    city:"Delhi",
    country: "India"
};

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };

}
const mergedData = mergeObjects(data1, data2);
// console.log(mergedData);

