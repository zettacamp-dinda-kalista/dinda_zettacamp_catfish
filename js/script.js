const todos = [];
const todos1 = [];
const todos2 = [];
const todos3 = [];
const todos4 = [];
const todos5 = [];
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
    const textTodo = document.getElementById("fname").value;
    const timestamp = document.getElementById("date").value;
    const textemail = document.getElementById("email").value;
    const telephone = document.getElementById("phone").value;
    const yourAge = document.getElementById("age").value;
    const instagram = document.getElementById("ig").value;

    const generatedID = generateId();
    const todoObject = generateTodoObject(generatedID, textTodo, false);
    const timestamp1 = generateTodoObject(generatedID, timestamp, false);
    const textemail1 = generateTodoObject(generatedID, textemail, false);
    const telephone1 = generateTodoObject(generatedID, telephone, false);
    const yourAge1 = generateTodoObject(generatedID, yourAge, false);
    const instagram1 = generateTodoObject(generatedID, instagram, false);

    todos.push(todoObject);
    todos1.push(timestamp1);
    todos2.push(textemail1);
    todos3.push(telephone1);
    todos4.push(yourAge1);
    todos5.push(instagram1);
   
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
    const completed1TODOList = document.getElementById("todos1");
    completed1TODOList.innerHTML = "";
    const completed2TODOList = document.getElementById("todos2");
    completed2TODOList.innerHTML = "";
    const completed3TODOList = document.getElementById("todos3");
    completed3TODOList.innerHTML = "";
    const completed4TODOList = document.getElementById("todos4");
    completed4TODOList.innerHTML = "";
    const completed5TODOList = document.getElementById("todos5");
    completed5TODOList.innerHTML = "";

    for(todoItem of todos){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completedTODOList.append(todoElement);
    }

    for(todoItem of todos1){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completed1TODOList.append(todoElement);
    }

    for(todoItem of todos2){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completed2TODOList.append(todoElement);
    }

    for(todoItem of todos3){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completed3TODOList.append(todoElement);
    }

    for(todoItem of todos4){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completed4TODOList.append(todoElement);
    }
    for(todoItem of todos5){
        const todoElement = makeTodo(todoItem);

        if(todoItem.isCompleted == false)
            completed5TODOList.append(todoElement);
    }
 });

 function makeTodo(todoObject) {
 
    const textFname = document.createElement("p");
    textFname.innerText = todoObject.task;
  
    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(textFname);
  
    const container = document.createElement("tr"); //pemanggilan
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

var myImage = new Image(300, 300);
	myImage.src = '../img/girl.png';
	x = document.getElementById("gambar");
	x.appendChild(myImage);	

const img = document.querySelector("#img");

    img.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    });

// //Menyimpan Data
// function saveData() {
//     if(isStorageExist()){
//         const parsed = JSON.stringify(todos);
//         const parsed1 = JSON.stringify(todos1);
//         const parsed2 = JSON.stringify(todos2);
//         const parsed3 = JSON.stringify(todos3);
//         const parsed4 = JSON.stringify(todos4);
        
//         localStorage.setItem(STORAGE_KEY, parsed);
//         localStorage1.setItem(STORAGE_KEY, parsed1);
//         localStorage2.setItem(STORAGE_KEY, parsed2);
//         localStorage3.setItem(STORAGE_KEY, parsed3);
//         localStorage4.setItem(STORAGE_KEY, parsed4);
//         document.dispatchEvent(new Event(SAVED_EVENT));
//     }
//   }

//   const SAVED_EVENT = "saved-todo";
//   const STORAGE_KEY = "TODO_APPS";
   
   
// function isStorageExist() /* boolean */ {
//     if(typeof(Storage) === undefined){
//         alert("Browser kamu tidak mendukung local storage");
//         return false
//     }
//     return true;
//   }

// document.addEventListener(SAVED_EVENT, function() {
//     console.log(localStorage.getItem(STORAGE_KEY));
//     console.log(localStorage1.getItem(STORAGE_KEY));
//     console.log(localStorage2.getItem(STORAGE_KEY));
//     console.log(localStorage3.getItem(STORAGE_KEY));
//     console.log(localStorage4.getItem(STORAGE_KEY));
//   });

//   // untuk menyimpan data di weblocal storage saat dibuka kembali 
// function loadDataFromStorage() {
//     const serializedData = localStorage.getItem(STORAGE_KEY);
   
//     let data = JSON.parse(serializedData);
   
//     if(data !== null){
//         for(todo of data){
//             todos.push(todo);
//         }
//     }
   
   
//     document.dispatchEvent(new Event(RENDER_EVENT));
//   }