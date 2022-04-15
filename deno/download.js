import { IdeaBox } from "./IdeaBox.js";
import { names } from "./names.js";

for (const name of names) {
  const ibox = new IdeaBox(name);
  await ibox.fetchAndSave();
}
