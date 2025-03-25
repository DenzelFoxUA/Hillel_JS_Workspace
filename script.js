const mainContainer = document.querySelector("#mainContainer");

document.addEventListener("DOMContentLoaded", function()
{
    
    const taskText = document.querySelector("#taskText");
    const submitBtn = document.querySelector("#addTask");
    const list = document.querySelector("#toDoList");

    var tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasksArchive()
    {
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }


    function createItem(taskText, index){

        if(taskText !== "")
        {
        
            let taskRow = document.createElement("li");
            taskRow.textContent = taskText;

            let taskButton = document.createElement("button");
            taskButton.type = "button";
            taskButton.id = "deleteBtn";
            taskButton.textContent = "Delete";

            taskButton.addEventListener("click", () => {
                taskRow.remove();
                tasksList.splice(index, 1);
                saveTasksArchive();
                
            });

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
    
    submitBtn.addEventListener("click", () =>
    {
        if(taskText.value.trim() !== "")
        {
            createItem(taskText.value.trim());
            tasksList.push(taskText.value.trim());
            saveTasksArchive();
            loadTasks();
            taskText.value = "";
        }
    })
    
    loadTasks();
});