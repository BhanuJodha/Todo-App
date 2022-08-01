const addTask = document.querySelector(".tray>:first-child");
let deleteTask = [];


// Changing Style
function toggleCard(e) {
    let index = deleteTask.findIndex(element => element === e.value);
    if (index != -1) {
        deleteTask.splice(index, 1);
        e.nextElementSibling.style.textDecoration = "";
    }
    else {
        deleteTask.push(e.value);
        e.nextElementSibling.style.textDecoration = "line-through";
    }
}

function eventHandler(e) {
    target = e.target;
    if (target.name === "id") {
        toggleCard(target);
    }
}



document.addEventListener("click", eventHandler);