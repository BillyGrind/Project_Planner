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
  <input type="text" id="description" />
  <input type="submit" value="add" />
</form>
     `;
  plannerAddContainer.innerHTML += content;
}
