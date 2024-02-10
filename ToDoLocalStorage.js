const tasksForm = document.getElementById("ToDoList");
const taskList = document.getElementById("TasksToDo");

// retrieve from localstorage

const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTask = document.createElement("li");
  newTask.innerText = savedTodos[i].task;
  newTask.iscompleted = savedTodos[i].isCompleted? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = "line-through";
  }
  taskList.appendChild(newTask);
}

tasksForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTask = document.createElement("li");
  let taskValue = document.getElementById("ToDo").value;
  newTask.innerText = taskValue;
  newTask.isCompleted = false;
  tasksForm.reset();
  taskList.appendChild(newTodo);

    // save to localStorage
    savedTodos.push({ task: newTask.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  });
  
  todoList.addEventListener("click", function(event) {
    let clickedItem = event.target;
  
    if (!clickedItem.isCompleted) {
      clickedItem.style.textDecoration = "line-through";
      clickedItem.isCompleted = true;
    } else {
      clickedItem.style.textDecoration = "none";
      clickedItem.isCompleted = false;
    }
  
    // breaks for duplicates - another option is to have dynamic IDs
    for (let i = 0; i < savedTodos.length; i++) {
      if (savedTodos[i].task === clickedItem.innerText) {
        savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
      }
    }
  });
