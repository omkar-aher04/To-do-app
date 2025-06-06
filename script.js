const addToDo = document.querySelector(".addToDo");
const Todo = document.querySelector(".To-do");

addToDo.addEventListener("click", addtask);

function addtask() {
    addToDo.style.display = "block";
    addToDo.style.display = "none";
  const parent = document.createElement("div");
  const p = document.createElement("p");
  const desc = document.createElement("small");
  const addBtn = document.createElement("button");
  p.setAttribute("contenteditable", "true");
  p.setAttribute("data-placeholder", "Add your task...");
  desc.innerText = "Description";
  parent.classList.add("parent");
  desc.classList.add("desc");
  addBtn.classList.add("addBtn");
  addBtn.innerText = "Add task";

  addBtn.addEventListener("click", () => {
    if(p.textContent.trim().length > 1){
    const taskWrapper = document.createElement("div");
    taskWrapper.classList.add("task-item");

    const taskTitle = document.createElement("p");
    taskTitle.innerText = p.textContent;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskWrapper.remove();
      }
        const deleted = document.createElement("div");
        deleted.classList.add("deleted");
        deleted.innerText = "task Completed 🎉";

        document.body.prepend(deleted);
        setTimeout(() => {
      deleted.remove();
    }, 2000);
    });

    taskWrapper.append(checkbox, taskTitle);
    Todo.prepend(taskWrapper);
    
    p.innerHTML = "";
    addToDo.style.display = "none"; 
    }else{
        alert("Please enter at least 2 characters.");
    }
  });

  parent.append(p, desc, addBtn);
  Todo.append(parent);
  console.log("hello");
}
