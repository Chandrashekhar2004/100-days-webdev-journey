let para = document.createElement('p');
para.innerHTML = "This is a paragraph created using JavaScript.";
document.body.appendChild(para);

para.style.color = "red";

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');
p.innerHTML ="Me TOO!"
h1.innerHTML = "This is a heading created using JavaScript.";
document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(p);
