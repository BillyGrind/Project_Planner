export function filter() {
  const btnToDo = document.getElementsByClassName("filter-toDo");
  const btnDoing = document.getElementsByClassName("filter-doing");
  const btnDone = document.getElementsByClassName("filter-done");
  const project = document.getElementsByClassName("project");

  btnToDo.addEventListener("click", () => {
    project.forEach((projectItem) => {
      if (projectItem.classList("toDo")) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });

  btnDoing.addEventListener("click", () => {
    project.forEach((projectItem) => {
      if (projectItem.classList("doing")) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });

  btnDone.addEventListener("click", () => {
    project.forEach((projectItem) => {
      if (projectItem.classList("done")) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
}
