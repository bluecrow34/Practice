document.addEventListener("DOMContentLoaded", function(){
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-items");


form.addEventListener("submit", function(event){
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newItem = document.createElement('li');
    newItem.innerText = document.getElementById("todo-input").value;

    list.appendChild(newItem);
    newItem.append(removeButton);

    form.reset();
});

list.addEventListener('click', function(event){
    const targetTagToLowercase = event.target.tagName.toLowerCase();
    if(targetTagToLowercase === 'li'){
        event.target.style.textdecoration = "line-through";
        } else if (targetTagToLowercase === "button"){
            event.target.parentNode.remove();
    }
});
});

localStorage.setItem(list, form)

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  list.appendChild(newTodo);
}

savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
