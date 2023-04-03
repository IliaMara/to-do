const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

const greenColor = "lightgreen";
const lightGrayColor = "lightgray";
const darkGrayColor = "darkgray";

input.addEventListener("keydown", function (event){
    if (event.key === "Enter")
        addItem();
})

function addItem(){
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("div");

    divParent.className = "item";
    divParent.innerHTML = "<div>" + input.value + "</div>";

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = lightGrayColor;
    checkIcon.addEventListener("click", function (){
        if (checkIcon.style.color === lightGrayColor) {
            checkIcon.style.color = greenColor;
        } else {
            checkIcon.style.color = lightGrayColor;
        }
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = darkGrayColor;
    trashIcon.addEventListener("click", function (){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}
