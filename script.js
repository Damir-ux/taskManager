let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button onclick="editTask(${index})">Редактировать</button>
                <button onclick="deleteTask(${index})">Удалить</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  });
}

function addTask(e) {
  e.preventDefault();
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Редактировать задачу:", tasks[index]);
  if (newText !== null) {
    tasks[index] = newText.trim();
    renderTasks();
  }
}

function init() {
  const taskForm = document.getElementById("task-form");
  taskForm.addEventListener("submit", addTask);
  renderTasks();

  const taskList = document.getElementById("task-list");
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        tasks = Array.from(taskList.querySelectorAll(".task-item")).map(
          (item) => item.querySelector("span").textContent
        );

        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Задачи сохранены:", tasks);
      }
    });
  });

  const config = { childList: true, subtree: true };

  observer.observe(taskList, config);
}

init();