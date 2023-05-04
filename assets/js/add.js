export function createAddContainer() {
  //Select planner container
  let plannerAddContainer = document.querySelector(".planner-add");
  //Create input Name
  let content = `
  <form>
  <section class="form-label">
    <label for="name">Name</label>
    <label for="description">Description</label>
    <label for="date">Date</label>
  </section>
  <section class="form-input">
    <input type="text" id="name" />
    <input type="text" id="description" />
    <input type="text" id="date" />
  </section>
  <section class="form-button"><input type="submit" value="add" id="submit-button" /></section>
</form>
     `;
  plannerAddContainer.innerHTML += content;
  let buttonAdd = document.getElementById("submit-button")[0];
  let inputName = document.getElementById("name")[0];
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputNameValue = inputName.value;
    array.push(inputValue);
    localStorage.setItem("myListItems", JSON.stringify(array));
    inputText.value = "";
    console.log(inputNameValue);
  });
}

