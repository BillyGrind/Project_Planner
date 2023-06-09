import { setItemStorage, getItemStorage } from "./getItemAndStore.js";
import { createContent } from "./content.js";
import { daysLeft } from "./date.js";

let taskArray = [];

//Function to initialize taskArray with the value from local storage
function initTaskArray() {
  let storedTaskArray = getItemStorage();
  if (storedTaskArray) {
    taskArray = storedTaskArray;
  }
}

// Call initTaskArray when the page loads
window.addEventListener("load", initTaskArray);

export function createAddContainer() {
  //Select planner container
  let plannerAddContainer = document.querySelector(".planner-add");
  //Create input Name
  let content = `
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" />
    <label for="description">Description</label>
    <input type="text" id="description" />
    <label for="date">Date</label>
    <input type="date" id="date" />
    <section class="form-button">
      <input type="submit" value="add" id="submit-button" />
    </section>
  </form>
     `;
  plannerAddContainer.innerHTML += content;
  let form = document.querySelector("form");
  // function when you submit the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputNameValue = document.querySelector("#name").value;
    let inputDescriptionValue = document.querySelector("#description").value;
    let inputDateValue = document.querySelector("#date").value;
    let daysLeftValue = daysLeft(new Date(inputDateValue));
    let newTask = {
      name: inputNameValue,
      description: inputDescriptionValue,
      daysLeft: daysLeftValue,
    };
    taskArray.push(newTask);
    setItemStorage(taskArray);
    createContent();
    form.reset();
  });
}

//   <form>
//   <section class="form-label">
//     <label for="name">Name</label>
//     <label for="description">Description</label>
//     <label for="date">Date</label>
//   </section>
//   <section class="form-input">
//     <input type="text" id="name" />
//     <input type="text" id="description" />
//     <input type="date" id="date" />
//   </section>
//   <section class="form-button"><input type="submit" value="add" id="submit-button" /></section>
// </form>
