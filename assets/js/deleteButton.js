export function deleteButton() {
  let deleteButtonElements = document.getElementsByClassName("button-delete");

  for (let elem of deleteButtonElements) {
    elem.addEventListener("click", () => {
      localStorage.removeItem("tasks");

      elem.parentNode.remove();
    });
  }
}
