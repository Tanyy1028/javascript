let input = document.querySelector("#input");
let addbtn = document.querySelector("#add-btn");
let output = document.querySelector("#output");

let note = [
];

addbtn.addEventListener("click", () => {
  const value = input.value;
  note.push(input.value);
  displaynotes();
});

function displaynotes() {
  output.innerHTML = ""

    note.forEach((note, index) => {
    let newdiv = document.createElement("div");
    let textarea = document.createElement("textarea");
    newdiv.className="mb-3"
    textarea.textContent = ":  " + note;
    textarea.className = "fs-3 w-100 border-0";
    textarea.rows = 2;

    const del = document.createElement("button");
    del.className = "btn btn-danger";
    del.textContent = "Delete";

    del.addEventListener("click",()=>{
        delbtn(index);
    })


    newdiv.appendChild(textarea);
    newdiv.appendChild(del);
    output.appendChild(newdiv);
    input.value = "";
  });
}

function delbtn(index){
    note.splice(index,1)
    displaynotes()
}