let addTask = document.getElementById('addTask');
let task = document.getElementById('task');
let rename = document.getElementById('rename')

addTask.addEventListener("click", function() {
    let input = document.getElementById('taskName').value;
    task.innerText = input;
})