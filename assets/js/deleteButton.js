let deleteButton = document.getElementsByClassName("delete-button");
export function deleteButton() {
  console.log(deleteButton);
  for (let elem of deleteButton) {
    elem.addEventListener("click", () => {
      localStorage.removeItem("tasks");
      console.log("hello");
      elem.parentNode.remove();
    });
  }
}
