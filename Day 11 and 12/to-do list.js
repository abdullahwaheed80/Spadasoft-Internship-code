let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let arr = [];

function taskDisplay() {
    if (taskInput.value === "") {
        alert('Please Enter a task');
        return;
    }
    else {
        arr.push(taskInput.value);
        showTasks();
        taskInput.value = "";
    }
}
function showTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.textContent = "Delete";

        let taskDisplay = document.createElement("div");
        taskDisplay.className = "taskDisplay";

        deleteBtn.onclick = function () {
            arr.splice(i, 1);
            showTasks();
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}