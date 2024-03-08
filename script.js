let addTask = document.getElementById('addTask');
let task = document.getElementById('task');
let rename = document.getElementById('rename');
let renameInput = document.getElementById('renameInput');
let del = document.getElementById('del');
let renameInputBtn = document.getElementById('renameInputBtn');
let taskName = document.getElementById('setTaskName');

/* add task */
addTask.addEventListener("click", function() {
    const node = document.getElementById("task1");
    const clone = node.cloneNode(true);
    clone.innerText = taskName.value;
    document.getElementById("task1").appendChild(clone); 
    
})

/* rename task */
rename.addEventListener("click", function() {
    renameInput.classList.remove('hidden');
    rename.classList.add('hidden');
    del.classList.add('hidden');
    renameInputBtn.classList.remove('hidden');
})

renameInputBtn.addEventListener("click", function() {
    let renameValue = document.getElementById('renameInput').value;
    task.innerText = renameValue;
    renameInput.classList.add('hidden');
    rename.classList.remove('hidden');
    del.classList.remove('hidden');
    renameInputBtn.classList.add('hidden');
})

/* delete task */

del.addEventListener("click", function() {
    ul.removeChild(clone);
})