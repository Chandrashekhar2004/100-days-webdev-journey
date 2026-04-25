let btn = document.querySelector("#button");
let input = document.querySelector("#taskInput");
let ul = document.querySelector("#taskList");

btn.addEventListener("click", ()=>{
    let task = input.value;
    if(task === "") return;
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type= "checkbox";

    let span = document.createElement("span");
    span.innerText = task;

    // delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    // delete functionality
    delBtn.onclick = () => {
        li.remove();
    };
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);

    input.value = "";
})

let allBtn = document.querySelector("#all");
let completedBtn = document.querySelector("#completed");
let pendingBtn = document.querySelector("#pending");

// all tasks
allBtn.onclick = ()=>{
    let tasks = document.querySelectorAll("li");
    tasks.forEach(li => li.style.display = "flex");
};

// shows only completed tasks
completedBtn.onclick = ()=>{
    let tasks = document.querySelectorAll("li");

    tasks.forEach(li => {
        let checkbox = li.querySelector("input");

        if(checkbox.checked){
            li.style.display = "flex";
        }else{
            li.style.display = "none";
        }
    })
}

// shows only pending tasks
pendingBtn.onclick = () => {
    let tasks = document.querySelectorAll("li");

    tasks.forEach(li => {
        let checkbox = li.querySelector("input");

        if (!checkbox.checked) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
};