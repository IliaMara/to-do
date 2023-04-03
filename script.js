const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

input.addEventListener("keydown", function (event){
    if (event.key === "Enter")
        addItem();
})

function addItem(){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");

    divParent.className = "item";
    divParent.innerHTML = "<div>" + input.value + "</div>";

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}
