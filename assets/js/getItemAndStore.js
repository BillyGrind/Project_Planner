export function setItemStorage(array) {
  let arrayJson = JSON.stringify(array);
  localStorage.setItem("tasks", arrayJson);
}

export function getItemStorage() {
  let arrayJson = localStorage.getItem("tasks");
  if (arrayJson === null) {
    return [];
  } else {
    let array = JSON.parse(arrayJson);
    return array;
  }
}
