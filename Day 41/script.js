// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay)
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000);
//         });
//     });
// });

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb("apna college",
//     () => {
//         console.log("success : your data was saved");
//         saveToDb("hello world",
//             () => {
//                 console.log("success2 : data2 saved")
//                 saveToDb("hello",
//                     () => {
//                         console.log("success 3 : your data was saved")
//                     },
//                     () => {
//                         console.log("failure 3 : weak connection")
//                     })
//             },
//             () => {
//                 console.log("failure2 : weak connection")
//             });
//     },
//     () => {
//         console.log("failure : weak connection. data not saved");
//     }
// );

// promises
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    })
}
let request = saveToDb("Apna college");

request.then((result) => {
    console.log("data1 saved");
    console.log(result);
    return saveToDb("hello world")
})
    .then((result) => {
        console.log("data2 saved.")
        console.log(result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(request);
        console.log(error);
    })


