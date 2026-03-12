let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(input);
document.body.appendChild(button);


// ans 2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "Username");

// ans 3

let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// ans 4

let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
h1.style.color = "purple";
document.body.appendChild(h1);

// ans 5
let p = document.createElement("p");
p.innerHTML = "<b>Apna College Practice</b>"
document.body.appendChild(p);

