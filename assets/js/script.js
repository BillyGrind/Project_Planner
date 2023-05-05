import { createAddContainer } from "./add.js";
import { createContent } from "./content.js";
import { filter } from "./filter.js";
import { orderByName } from "./filter.js";
import { changeStatus, btnStatus } from "./buttons.js";

createAddContainer();
window.onload = createContent();
changeStatus();
console.log(btnStatus);
