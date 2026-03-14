let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click" , function(){
    // creating list item
    let li = document.createElement("li");
    li.innerText = input.value;
    // creating delete button 
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    // append items
    li.appendChild(delBtn);
    ul.appendChild(li);
    input.value = ""; 
});
// reemove li items
ul.addEventListener("click" , function(event){
    let listItem = event.target.parentElement;
    listItem.remove();
});

// let dltBtns = document.querySelectorAll(".delete");
// for(dltBtn of dltBtns ){
//     dltBtn.addEventListener("click" , function(){
//     let par = this.parentElement; 
//     par.remove();
// })
// };

