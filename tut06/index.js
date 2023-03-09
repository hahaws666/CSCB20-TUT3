/* 
1. extract the button from the dom
2. figure out how to apply a click method
3. define the method to show an alert
*/
const dontClickButton = document.getElementById("dont-click");
// const dontClickButton = document.querySelector("#dont-click");
dontClickButton.addEventListener("click", () => {
    alert("I SAID DONT CLICK ME");
});

/*
1. extract the mode change button from the DOM
2. how can i apply "dark mode" vs "light-mode"? what does it mean?
*/
const changeModeButton = document.getElementById("change-mode");
changeModeButton.addEventListener("click", () => {
    const page = document.querySelector("body");
    page.classList.toggle("dark-mode");
});

/*
1. get the input
2. get the list
3. validate?
4. append to the list
*/


const submitButton = document.getElementById("todo-submit");

submitButton.addEventListener("click", () => {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    const todoText = todoInput.value;
    if (todoText === "") {
        alert("ENTER SOMETHING");
        return;
    }

    const newTodo = document.createElement("li"); // <li> </li>
    newTodo.innerText = todoText;

    todoList.append(newTodo);
    todoInput.value = "";
});



