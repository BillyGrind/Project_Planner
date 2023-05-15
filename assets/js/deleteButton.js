export function deleteButton() {
  let deleteButtonElements = document.getElementsByClassName("button-delete");
  console.log(deleteButtonElements);
  for (let elem of deleteButtonElements) {
    elem.addEventListener("click", () => {
      localStorage.removeItem("tasks");
      console.log("hello");
      elem.parentNode.remove();
    });
  }
}
