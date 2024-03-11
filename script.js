let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');
let setTaskName = document.getElementById('setTaskName');
let task0 = document.getElementById('task0');
let taskName0 = document.getElementById('taskName0');
let rename0 = document.getElementById('rename0');
let del0 = document.getElementById('del0');
let renameInput0 = document.getElementById('renameInput0');
let renameInputBtn0 = document.getElementById('renameInputBtn0');

/* add task */
addTask.addEventListener("click", function() {


    var li = document.createElement('li');
    li.appendChild(document.createTextNode(setTaskName.value));
    var hi = li.appendChild(document.createElement('h1'));
    hi.innerText('hello');
    li = li+hi;
    taskList.appendChild(li);





})

/* rename task */
renameInputBtn.addEventListener("click", function() {

})

/* delete task */
del0.addEventListener
