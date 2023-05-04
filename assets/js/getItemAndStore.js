export function setItem(array) {
  let arrayJson = JSON.stringify(array);
  localStorage.setItem("tasks", arrayJson);
}

export function getItem() {
  let arrayJson = localStorage.getItem("tasks");
  let array = JSON.parse(arrayJson);
  return array;
}
