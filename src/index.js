document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = document.querySelector("#new-task-description").value;

    const li = document.createElement("li");

    li.textContent = task;

    document.querySelector("#tasks").appendChild(li);
  });
});
