document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    renderTasks(task);
  });

  addTaskBtn.addEventListener("click", function () {
    const taskToBeAdded = todoInput.value.trim();
    if (taskToBeAdded === "") {
      alert("Please enter a task");
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskToBeAdded,
      isCompleted: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks(newTask);
    todoInput.value = "";
    console.log(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.isCompleted) {
      li.classList.add("completed");
    }
    li.innerHTML = `<span>${task.text}</span>
        <button>Delete</button>`;
    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;
      task.isCompleted = !task.isCompleted;
      li.classList.toggle("completed");
      saveTasks();
    });
    li.querySelector("button").addEventListener("click", function (e) {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
