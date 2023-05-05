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
const btnTime = document.getElementsByClassName("filter-date");
const btnName = document.getElementsByClassName("filter-name")[0];

/* const names = array.from(document.getElementsByClassName("content-name")); */
const plannerContent = Array.from(
  document.getElementsByClassName("planner-content")
);

btnName.addEventListener("click", () => {
  const names = Array.from(document.getElementsByClassName("content-name"));
  names.sort((a, b) => a.textContent.localeCompare(b.textContent));
  const plannerContent = document.getElementsByClassName("planner-content")[0];
  plannerContent.innerHTML = "";
  names.forEach((name) => {
    plannerContent.appendChild(name.parentNode.cloneNode(true));
  });
});

function orderByDates() {
  const dates = document.getElementsByClassName("content-date");

  dates.sort((date1, date2) => date1 - date2);
}
