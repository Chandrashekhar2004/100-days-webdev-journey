// JS call stack visualization
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

// js single threaded nature

setTimeout(()=>{
    console.log("Apna College");
},2000);

setTimeout(()=>{
    console.log("Hello World!")
},2000);

console.log("Hello...")