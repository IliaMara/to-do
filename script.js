const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

const greenColor = "lightgreen";
const lightGrayColor = "lightgray";
const darkGrayColor = "darkgray";

input.addEventListener("keydown", function (event){
    if (event.key === "Enter")
        addItem();
})
updateTodoDocument();

function addItem(){
    if (input.value) {
        TODOS.push(
            new Todo(uid(), input.value, false)
        );

        input.value = '';

        updateTodoDocument();
    }
}

function removeItem(id) {
    TODOS = TODOS.filter(todo => todo.id !== id);
    updateTodoDocument();
}

function switchStatus(id) {
    TODOS.filter(todo => todo.id === id)
        .forEach(todo => todo.isDone = !todo.isDone);
    updateTodoDocument();
}

function saveEditedItem(id, newDescription){
    TODOS.filter(todo => todo.id === id)
        .forEach(todo => todo.description = newDescription);
    updateTodoDocument();
}

function updateTodoDocument() {
    let children = [];
    TODOS.forEach(todo => {
        let divParent = document.createElement("div");
        let divChild = document.createElement("div");

        let trashIcon = document.createElement("i");
        let checkIcon = document.createElement("i");
        let editIcon = document.createElement("i");

        trashIcon.className = "fas fa-trash";
        trashIcon.style.color = darkGrayColor;
        trashIcon.addEventListener("click", function (){
            removeItem(todo.id);
        })

        divChild.appendChild(trashIcon);

        checkIcon.className = "fas fa-check-square";
        checkIcon.style.color = todo.isDone ? greenColor : lightGrayColor;
        checkIcon.addEventListener("click", function (){
            switchStatus(todo.id);
        })

        divChild.appendChild(checkIcon);

        editIcon.className = "fa-solid fa-pen-to-square";
        editIcon.style.color = lightGrayColor;
        editIcon.addEventListener("click", function (){
            editItem(todo.id, divParent);
        })

        divChild.appendChild(editIcon);

        divParent.className = "item";
        divParent.innerHTML = todo.description;

        divParent.appendChild(divChild);

        children.push(divParent);
    })
    toDoItems.replaceChildren(...children);
    console.log(TODOS);
}

function editItem(id, divParent) {
    let inputItem = document.createElement("input");
    inputItem.id = "input";
    inputItem.value = divParent.textContent;
    inputItem.className = "item";

    inputItem.addEventListener("keydown", function (event){
        if (event.key === "Enter") {
            saveEditedItem(id, inputItem.value);
        }
    });

    toDoItems.replaceChild(inputItem, divParent);
    inputItem.select();
}

function uid(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}