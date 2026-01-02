let color = "red";
if (color == "red") {
    console.log("Stop the vehicle");
}
else if (color == "yellow") {
    console.log("Get ready to move");
}
else if (color == "green") {
    console.log("Move the vehicle");
}
// Assignment = check string is good string or length is >3;
let str = "apple";
if (str[0] === "a" && str.length > 3) {
    console.log("Good string");
}
else {
    console.log("Not a good string");
}

// indexof or includes method
let colors = ["red", "yellow", "green"];
console.log(colors.indexOf("yellow")); 
console.log(colors.includes("blue")); 

// Assignment = check if number is present in array or not
let numbers = [1, 2, 3, 4, 5];
let numToCheck = 3; 
if (numbers.includes(numToCheck)) {
    console.log("Number is present in the array");
}   
else {
    console.log("Number is not present in the array");
}   