// function greet(){
//     // throw "weak connection";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was :" , result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");
//     console.log("error was : " , err);
// })

// let demo = async ()=>{
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);

//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("blue", 1000);
    }
    catch {
        let num = 5;
        console.log(num + 15);
    }
}
demo();

let url = "https://catfact.ninja/fact";


async function getFact() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch (err) {
        console.log("error - ", err);
    }
    console.log("Done");
}























// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data 1 =",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR :", err);
//     })

