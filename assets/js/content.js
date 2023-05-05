import { taskArray } from "./const.js";
import { getItemStorage } from "./getItemAndStore.js";

export function createContent() {
  let plannerContent = document.querySelector(".planner-content");
  plannerContent.innerHTML = "";
  let myArray = getItemStorage();
  // console.log(myArray);
  myArray.forEach((element) => {
    let name = element.name;
    let description = element.description;
    let date = element.date;
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
