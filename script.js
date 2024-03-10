let addTask = document.getElementById('addTask');
let setTaskName = document.getElementById('setTaskName');

let task0 = document.getElementById('task0');
let task1 = document.getElementById('task1');
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');
let task4 = document.getElementById('task4');
let task5 = document.getElementById('task5');

let taskName0 = document.getElementById('taskName0');
let taskName1 = document.getElementById('taskName1');
let taskName2 = document.getElementById('taskName2');
let taskName3 = document.getElementById('taskName3');
let taskName4 = document.getElementById('taskName4');
let taskName5 = document.getElementById('taskName5');

const tasks = [task0, task1, task2, task3, task4, task5];
const taskNames = [taskName0, taskName1, taskName2, taskName3, taskName4, taskName5];
let i = 0;

/* add task */
addTask.addEventListener("click", function() {
        taskNames[i].innerText = setTaskName.value;
        tasks[i].classList.remove('hidden');
        i++;
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