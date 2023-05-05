import { daysLeft } from "./date.js";
import { getItemStorage } from "./getItemAndStore.js";
export function createContent() {
  let plannerContent = document.querySelector(".planner-content");
  plannerContent.innerHTML = "";
  let myArray = getItemStorage();
  myArray.forEach((element) => {
    let name = element.name;
    let description = element.description;
    let daysLeft = element.daysLeft;
    let content = `<div class="planner-content-global">
    <section class="content-index"></section>
    <section class="content-name">${name}</section>
    <section class="content-description">${description}</section>
    <section class="content-date">${daysLeft}</section>
    <section class="content-status"><button class="button-status"></button></section>
  </div>
  `;
    plannerContent.innerHTML += content;
  });
}
