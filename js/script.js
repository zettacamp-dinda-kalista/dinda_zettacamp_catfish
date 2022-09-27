const todos = [];
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
 
    const submitForm = document.getElementById("form");
 
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo();
    });
    // untuk menjalankan fungsi isStorageExist
    if(isStorageExist()){
        loadDataFromStorage();
    }
});

// implementasi fungsi addTodo() yang digunakan untuk membuat Todo
function addTodo() {
    const textTodo = document.getElementById("title").value;

    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, textTodo, false);
    todos.push(todoObject);
   
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
 }

 function generateId() {
    return +new Text();
}
 
function generateTodoObject(id, task, isCompleted) {
    return {
        id,
        task,
        isCompleted
    }
}

document.addEventListener(RENDER_EVENT, function () {
    const completedTODOList = document.getElementById("todos");
    completedTODOList.innerHTML = "";

    for(todoItem of todos){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completedTODOList.append(todoElement);
    }
 });

 function makeTodo(todoObject) {
 
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task;
  
    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(textTitle);
  
    const container = document.createElement("li");
    container.classList.add("item", "shadow")
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    if (todoObject.isCompleted){ 
   
        const checkButton = document.createElement("button");
        checkButton.classList.add("check-button");
        checkButton.addEventListener("click", function () {
            addTaskToCompleted(todoObject.id);
        });
   
        container.append(checkButton);
    }
    return container;
}

//Menyimpan Data
function saveData() {
    if(isStorageExist()){
        const parsed = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }

  const SAVED_EVENT = "saved-todo";
  const STORAGE_KEY = "TODO_APPS";
   
   
function isStorageExist() /* boolean */ {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
  }

document.addEventListener(SAVED_EVENT, function() {
    console.log(localStorage.getItem(STORAGE_KEY));
  });


