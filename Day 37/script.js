// let p = document.createElement("p");
// p.innerText = "This is a new paragraph";
// document.body.appendChild(p);

// let btn = document.querySelector("#btn");

// btn.onclick = function () {
//     document.querySelector("#text").innerText = "Text Changed!";
// };

// let p = document.querySelector("p");
// p.remove();



// change and input events

let input = document.querySelector("#text");
let para = document.querySelector("#para");

input.addEventListener("input" , function(){
    console.log("input event");
    console.log("final value = " , this.value);
    para.innerHTML = this.value;
});

input.addEventListener("change" , function() {
    console.log("change event");
    para.innerHTML = this.value;
});



