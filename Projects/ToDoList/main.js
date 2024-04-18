/*
    Students Tasks:
    [1] Use Sweet Alert If Input Is Empty

*/

// Setting Up Variables
let theInput = document.querySelector(".add-task input"),
  theAddBtn = document.querySelector(".add-task .plus"),
  tasksContainer = document.querySelector(".tasks-content"),
  noTasksMsg = document.querySelector(".no-tasks-message"),
  tasksCount = document.querySelector(".tasks-count span"),
  tasksCompleted = document.querySelector("tasks-copmpleted span");

// Focus On Input Field
window.onload = function () {
  theInput.focus();
};

// Adding The Task
theAddBtn.onclick = function () {
  // If Input Is Empty
  if (theInput.value === "") {
    console.log("No Value");
  } else {
    // Remove No Tasks Message
    noTasksMsg.remove();

    // Create Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteSpan = document.createElement("span");

    // Create The Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Adding Text To Span
    mainSpan.appendChild(text);

    //  Add Class To Span
    mainSpan.className = "task-box";

    // Adding Text To Delete Button
    deleteSpan.appendChild(deleteText);

    //  Add Class To Delete Button
    deleteSpan.className = "delete";

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteSpan);

    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);

    // Empty The Input
    theInput.value = "";
    
    // Focus On Field
    theInput.focus();
  }
};
