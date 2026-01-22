function executeFunction(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
let greet = function () {
    console.log("Hello, welcome to higher order functions!");
}
// executeFunction(greet, 5);




function oddEvenChecker(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return odd;
    } else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        }
        return even;
    }
    else{
        console.log("Invalid request");
    }
}

let request = "odd";
let Func = oddEvenChecker(request);
Func(5); // true
Func(10); // false   