import { IdeaBox } from "./IdeaBox.js";
import { names } from "./names.js";

//const names = ["fukui"];

const ideas = [];

for (const name of names) {
  const ibox = new IdeaBox(name);
  //const ideas = await ibox.getIdeas();
  //console.log(ideas.length)
  //const comments = await ibox.getComments();
  const ideas2 = await ibox.getIdeasWithComments();
  ideas2.forEach(i => ideas.push(i));
}
ideas.sort((a, b) => a.created.localeCompare(b.created));
console.log(ideas, ideas.length);
await Deno.writeTextFile("../data/ideas.json", JSON.stringify(ideas, null, 2));
