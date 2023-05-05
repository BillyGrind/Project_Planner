import { createAddContainer } from "./add.js";
import { createContent } from "./content.js";
import { filter } from "./filter.js";
import { orderByName } from "./filter.js";

createAddContainer();
window.onload = createContent();