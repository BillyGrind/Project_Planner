import { createContent } from "./content.js";

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

export function orderByName() {
  const parentContainer = document.querySelector(".planner-content-global");
  const nameElements = Array.from(
    document.getElementsByClassName("content-name")
  );

  const sortedElements = nameElements.sort((a, b) => {
    const nameA = a.textContent.toLowerCase();
    const nameB = b.textContent.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // Retrieve array from localStorage
  const storedArray = JSON.parse(localStorage.getItem("tasks"));

  // Map over the sorted elements and reorder the stored array based on names
  const sortedObjects = sortedElements.map((element) => {
    const name = element.textContent;
    return storedArray.find((obj) => obj.name === name);
  });

  // Update localStorage with the reordered array
  localStorage.setItem("tasks", JSON.stringify(sortedObjects));

  return { parentContainer, sortedElements, sortedObjects };
}

const btnName = document.querySelector(".filter-name");
btnName.addEventListener("click", () => {
  const { parentContainer, sortedElements, sortedObjects } = orderByName();
  console.log(sortedObjects);
  // Access parent container: console.log(parentContainer);

  // Update the order of the DOM elements based on the sorted elements
  parentContainer.innerHTML = "";
  sortedElements.forEach((element) => {
    parentContainer.appendChild(element);
    createContent();
  });
});

function orderByDeadLine() {
  const parentContainer = document.querySelector(".planner-content-global");
  const dateElements = Array.from(
    document.getElementsByClassName("content-date")
  );

  const sortedElementsByDeadline = dateElements.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
  // Retrieve array from localStorage
  const storedArray = JSON.parse(localStorage.getItem("tasks"));

  // Map over the sorted elements and reorder the stored array based on dates
  const sortedDates = sortedElementsByDeadline.map((element) => {
    const date = element.date;
    return storedArray.find((obj) => obj.date === date);
  });

  // Update localStorage with the reordered array
  localStorage.setItem("tasks", JSON.stringify(sortedDates));

  return { parentContainer, sortedElementsByDeadline, sortedDates };
}
const btnDate = document.querySelector(".filter-date");
btnDate.addEventListener("click", () => {
  const { parentContainer, sortedElementsByDeadline, sortedDates } =
    orderByDeadLine();
  console.log(sortedDates);
  // Access parent container: console.log(parentContainer);

  // Update the order of the DOM elements based on the sorted elements
  parentContainer.innerHTML = "";
  sortedElementsByDeadline.forEach((element) => {
    parentContainer.appendChild(element);
    createContent();
  });
});
