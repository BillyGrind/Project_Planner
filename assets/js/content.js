import { getItemStorage } from "./getItemAndStore.js";
import { daysLeft } from "./date.js";

export function createContent() {
  let plannerContent = document.querySelector(".planner-content");
  plannerContent.innerHTML = "";
  let myArray = getItemStorage();
  myArray.forEach((element) => {
    let name = element.name;
    let description = element.description;
    let date = element.date;
    // let daysLeft = daysLeft(date);
    let content = `<div class="planner-content-global">
    <section class="content-index"></section>
    <section class="content-name">${name}</section>
    <section class="content-description">${description}</section>
    <section class="content-date">${date}</section>
    <section class="content-status"><button class="button-status toDo">To Do</button></section>
  </div>
  `;
    plannerContent.innerHTML += content;
  });
}
