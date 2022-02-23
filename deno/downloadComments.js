import { apiGet } from "./apiGet.js";

const data = await apiGet("/v1/comments");
console.log(data);
await Deno.writeTextFile("../data/comments.json", JSON.stringify(data, null, 2));
