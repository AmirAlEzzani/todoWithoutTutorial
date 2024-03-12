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
    rename.setAttribute('id',i);
    rename.setAttribute('class','renameBtn')
    let renameBtn = document.getElementsByClassName('renameBtn');
    del.setAttribute('id',i);
    i++;  
})

/* rename task */
    renameBtn.addEventListener("click", function() {
        /* get the id of the rename btn corresponding to the
    })

/* delete task */

