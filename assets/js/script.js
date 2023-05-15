import { changeStatus, btnStatus } from "./buttons.js";
import { createAddContainer } from "./add.js";
import { createContent } from "./content.js";
import { filter } from "./filter.js";
// import { orderByName } from "./filter.js";
import { deleteButton } from "./deleteButton.js";
// import { selectButton } from "./selectToggleButton.js";
// import { selectButton } from "./selectToggleButton.js";
createAddContainer();
window.onload = createContent();

// changeStatus();
// console.log(btnStatus);
// selectButton();
// deleteButton();