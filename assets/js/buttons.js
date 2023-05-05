export let btnStatus = document.getElementsByClassName("button-status");

export function changeStatus() {
  //   let btnStatus = document.getElementsByClassName("button-status")[0];
  let project = document.getElementsByClassName("planner-content-global");

  for (let elem of btnStatus) {
    elem.addEventListener("click", () => {
      if (project.classList.contains("toDo")) {
        project.classList.remove("toDo");
        project.classList.add("doing");
        btnStatus.innerText = "Doing it ";
      } else if (project.classList.contains("doing")) {
        project.classList.remove("doing");
        project.classList.add("done");
        btnStatus.innerText = "It's Done";
      } else if (project.classList.contains("done")) {
        project.classList.remove("done");
        project.classList.add("toDo");
        btnStatus.innerText = "To Do";
      }
    });
  }
}
