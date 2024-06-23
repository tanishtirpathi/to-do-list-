document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("input");
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");

  // Handle form submission
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task !== "") {
      addTask(task);
      todoInput.value = "";
    }
  });

  // Function to add a task to the list
  const addTask = (task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => li.remove());
    li.addEventListener("click", () => li.classList.toggle("completed"));
    todoList.appendChild(li);
  };
});
window.addEventListener("beforeunload", function (event) {
  const message =
    "Are you sure you want to leave this page? data e may not be saved.";
  event.returnValue = message;
  return message;
});
