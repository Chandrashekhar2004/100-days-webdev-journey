let arr = [1, 2, 3, 4, 5];

// let print = function(el){
//     console.log(el);
// };

// arr.forEach(print)

// // arr.forEach(function(el){
// //     console.log(el);
// // })


// console.log("arrow function");
// arr.forEach((el) =>{

//     console.log(el);
// });

let student = [{
    name: "John",
    marks: 80
},
{
    name: "Jane",
    marks: 90
},
{
    name: "Doe",
    marks: 70
}]
let num = [1, 2, 3, 4, 5];

let gpa = student.map((el) => {
    return el.marks / 10;
})
// console.log(gpa);


let nums = [2, 3, 5, 6, 8, 9, 12];

let even = nums.filter((nums) => {
    return nums % 2 == 0;
})

// console.log(even);

// console.log([2,4,6,5].every((el) => el %2 ==0));

// finding maximum using reduce 

let nums1 = [2, 3, 5, 6, 8, 9, 12];

// let max = -1;

// for(let i =0; i<nums1.length;i++){
//     if(max<nums1[i]){
//         max = nums1[i];
//     }
// }

let max = nums1.reduce((max, el) => {
    if (max < el) {
        return el
    } else {
        return max;
    }
})
// console.log(max);

// let ans = nums1.reduce((mul, el) => {
//     if (el % 10 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// })

let ans = nums1.every((el) => {
    el % 10 == 0;
})
console.log(ans);

// finding minimum

let min = nums1.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);