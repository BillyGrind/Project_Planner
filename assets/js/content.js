import { taskArray } from "./const.js";

export function createContent() {
  let plannerContent = document.querySelector(".planner-content");
  plannerContent.innerHTML = "";
  taskArray.forEach((element) => {
    let name = element.name;
    let description = element.description;
    let date = element.date;
    console.log(name);
    let content = `<div class="planner-content-global">
    <section class="content-index"></section>
    <section class="content-name">${name}</section>
    <section class="content-description">${description}</section>
    <section class="content-date">${date}</section>
    <section class="content-status">${status}</section>
  </div>
  `;
    plannerContent.innerHTML += content;
  });
}
