// Q1 = second largest in array

let arr = [5,8,9,6,7,1,3];
let largest = [];
let secLargest =[];

for(let i = 0; i <arr.length;i++){
    if(arr[i] >largest){
        secLargest = largest;
        largest = arr[i];
    }
}   
// console.log("largest :", largest);
// console.log("second largest :", secLargest);

// Q2 = create a object

let student = {
    name : "chandu",
    age :21,
    marks:80
};

let keys = Object.keys(student);
for(let key of keys){
    // console.log(key);
    // console.log(key, ":", student[key])
}

// Q3 = merge two objects

let fruit ={
    name : "mango",
    color:"red"
}
let fruits2 ={
    price:200
}
fruits2.weight = "1kg";
let mergeObject = {...fruit,...fruits2};
// console.log(mergeObject);

// Q4 = 