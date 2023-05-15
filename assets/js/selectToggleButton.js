import { getItemStorage } from "./getItemAndStore.js";
export function selectButton() {
  //   let array = getItemStorage();
  let selectedButton = document.getElementsByClassName("button-status");
  for (let elem of selectedButton) {
    // console.log(elem);
    elem.addEventListener("click", (e) => {
      console.log(e.target.id);
      console.log(elem);
        let id = e.target.id
        let localArray = getItemStorage()
        console.log(localArray)
        let taskIndex = localArray.findIndex(elem => elem.id === id);
        console.log(taskIndex)
        console.log(localArray[taskIndex].status)
      if (elem.classList.contains("toDo")) {
        elem.classList.remove("toDo");
        elem.classList.add("doing");
        elem.innerText = "Doing it ";
      } else if (elem.classList.contains("doing")) {
        elem.classList.remove("doing");
        elem.classList.add("done");
        elem.innerText = "It's Done";
      } else if (elem.classList.contains("done")) {
        elem.classList.remove("done");
        elem.classList.add("toDo");
        elem.innerText = "To Do";
      }
    });
  }
}
// import { createContent } from "./content.js";
// export function selectButton() {
//   let selectedButton = document.getElementsByClassName("button-status");
//   for (let elem of selectedButton) {
//     let myArray = JSON.parse(localStorage.getItem("tasks")) || [];
//     let name =
//       elem.parentNode.parentNode.querySelector(".content-name").innerText;
//     let matchingObject = myArray.find((obj) => obj.name === name);
//     elem.addEventListener("click", () => {
//       if (elem.classList.contains("toDo")) {
//         console.log("toDo");
//         elem.classList.remove("toDo");
//         elem.classList.add("doing");
//         elem.innerText = "Doing it";
//         matchingObject.status = "Doing it";
//         // mettre à jour la propriété 'status' dans l'objet JE DETESTE LE LOCALSTORAGE :'(
//         localStorage.setItem("tasks", JSON.stringify(myArray)); // mettre à jour l'array dans le localStorage
//       } else if (elem.classList.contains("doing")) {
//         console.log("doing");
//         elem.classList.remove("doing");
//         elem.classList.add("done");
//         elem.innerText = "It's Done";
//         matchingObject.status = "It's Done";
//         localStorage.setItem("tasks", JSON.stringify(myArray));
//       } else if (elem.classList.contains("done")) {
//         console.log("done");
//         elem.classList.remove("done");
//         elem.classList.add("toDo");
//         elem.innerText = "To Do";
//         matchingObject.status = "To Do";
//         localStorage.setItem("tasks", JSON.stringify(myArray));
//       }
//     });
//   }
// }
