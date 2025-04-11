document.addEventListener("DOMContentLoaded", function()
{
    //const mainContainer = document.querySelector("#mainContainer");
    const taskText = document.querySelector("#taskText");
    const submitBtn = document.querySelector("#addTask");
    const list = document.querySelector("#toDoList");

    var tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasksArchive()
    {
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }

    function createItem(task, index){

        if(task.text !== "")
        {
            let taskRow = document.createElement("li");
            taskRow.classList.toggle("todo-item");
            let checkBox = document.createElement("input");
            checkBox.setAttribute("type","checkbox");
            checkBox.id = "checkIt";
            checkBox.checked = task.checked;

            if(task.checked){
                checkBox.checked = true;
                taskRow.classList.toggle("todo-item--checked");
            }

            checkBox.addEventListener("change", function(){
                taskRow.classList.toggle("todo-item--checked", this.checked);
                tasksList[index].checked = this.checked;
                saveTasksArchive();
            })

            let taskSpan = document.createElement("span");
            taskSpan.textContent = task.text;

            let taskButton = document.createElement("button");
            taskButton.type = "button";
            taskButton.id = "deleteBtn";
            taskButton.textContent = "Delete";

            taskButton.addEventListener("click", () => {
                taskRow.remove();
                tasksList.splice(index, 1);
                saveTasksArchive();
                loadTasks();
            });

            taskRow.appendChild(checkBox);
            taskRow.appendChild(taskSpan);
            taskRow.appendChild(taskButton);
            
            list.appendChild(taskRow);
        }
        
    }

    function loadTasks()
    {
        list.innerHTML = "";
        tasksList.forEach((task, index) => {
            createItem(task, index)
        });
    }
    
    submitBtn.addEventListener("click", (e) =>
    {
        e.preventDefault();
        if(taskText.value.trim() !== "")
        {
            //createItem(taskText.value.trim());
            tasksList.push({text: taskText.value.trim(), checked: false});
            saveTasksArchive();
            loadTasks();
            taskText.value = "";
        }
    })
    
    loadTasks();
});