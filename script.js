let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');
let setTaskName = document.getElementById('setTaskName');
let renameInput0 = document.getElementById('renameInput0');
let renameInputBtn0 = document.getElementById('renameInputBtn0');
let i = 0;
let renames = [];
let deletes = [];
/* add task and btns */
addTask.addEventListener("click", function() {
    let task = document.createElement('li');
    const rename = document.createElement('button');
    const del = document.createElement('button');
    task.appendChild(document.createTextNode(setTaskName.value));
    taskList.appendChild(task);
    task.appendChild(rename);
    task.appendChild(del);
    rename.innerHTML = "Rename";
    del.innerHTML = "Delete";
    rename.setAttribute('class','renameBtn')
    rename.setAttribute('id',i);
    task.setAttribute('id',i);
    del.setAttribute('id',i);
    i++;  
})

/* rename task */
var renameButton = document.getElementsByClassName('renameBtn');

PSEUDO CODE BELOW
document.querySelector('.renameBtn').addEventListener("click", function() {
    let change = this.id;
    
    rename.classList.add('hidden')
    del.classList.add('hidden')
    task.appendChild(renameInput);
    task.appendChild(renameInputBtn);
    renameInputBtn.addEventListener("click", function(){
        task.innerText = renameInput.value;
    })
    
})

/* delete task */
``
