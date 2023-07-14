var input = document.getElementById("new-todo-form");

// Execute a function when the user presses a key on the keyboard 


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
    return; // text veya kategori seçimi yapılmadıysa todo'ya ekleme
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
  editButton.innerText = "Düzenle";
  actions.appendChild(editButton);

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerText = "Sil";
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





