var input = document.getElementById("new-todo-form");
document.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    console.log("keyup1545547");
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("ekle1").click();
  }
  else{
    console.log("keyup9999");
    
  }
});


document.getElementById("new-todo-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const contentInput = document.getElementById("content");
  const categoryInputs = document.getElementsByName("category");

  const content = contentInput.value;
  let category = "";

  for (let i = 0; i < categoryInputs.length; i++) {
    if (categoryInputs[i].checked) {
      category = categoryInputs[i].value;
      break;
    }
  }

  if (content.trim() === "" || category === "") {
    return; // If content or category is empty, do not add the todo
  }

  let columnId = "";
  switch (category) {
    case "yapilacak":
      columnId = "yapilacak-column";
      break;
    case "yapilan":
      columnId = "yapilan-column";
      break;
    case "sorunlu":
      columnId = "sorunlu-column";
      break;
    default:
      return; // Invalid category
  }

  const column = document.getElementById(columnId);

  // Create a new todo item
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  // Create the label for the todo item
  const label = document.createElement("label");
  label.innerText = content;
  todoItem.appendChild(label);

  // Create the actions container
  const actions = document.createElement("div");
  actions.className = "actions";

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.className = "edit";
  const editIcon = document.createElement("img");
  editIcon.src = "edit.png";
  editIcon.alt = "Edit";
  editButton.appendChild(editIcon);
  actions.appendChild(editButton);

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  const deleteIcon = document.createElement("img");
  deleteIcon.src = "delete.png";
  deleteIcon.alt = "Delete";
  deleteButton.appendChild(deleteIcon);
  actions.appendChild(deleteButton);

  todoItem.appendChild(actions);

  // Add the todo item to the column
  column.appendChild(todoItem);

  // Clear the input fields
  contentInput.value = "";
  for (let i = 0; i < categoryInputs.length; i++) {
    categoryInputs[i].checked = false;
  }
});
