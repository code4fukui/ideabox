import { apiGet } from "./apiGet.js";

const data = await apiGet("/v1/ideas");
console.log(data);
await Deno.writeTextFile("../data/ideas.json", JSON.stringify(data, null, 2));
