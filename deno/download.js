import { IdeaBox } from "./IdeaBox.js";

const names = ["chibacity", "fukui"];
for (const name of names) {
  const ibox = new IdeaBox(name);
  await ibox.fetchAndSave();
}
