import { taskArray } from "./const.js";
export function getItemAndStore(key, elem) {
  taskArray.push(elem);
  localStorage.setItem(key, JSON.stringify(elem));
}
