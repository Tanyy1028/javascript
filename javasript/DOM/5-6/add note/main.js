const container = document.getElementById("container")
const input = document.getElementById("input")
const add = document.getElementById("add")

add.addEventListener('click',()=>{
    let value = input.value;
    let p =document.createElement("p");
    p.textContent=value;

    container.appendChild(p)
})