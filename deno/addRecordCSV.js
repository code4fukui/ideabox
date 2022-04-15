import { CSV } from "https://js.sabae.cc/CSV.js";

const loadCSV = async (fn) => {
  try {
    return CSV.toJSON(await CSV.fetch(fn));
  } catch (e) {
  }
  return [];
};
const writeCSV = async (fn, data) => {
  await Deno.writeTextFile(fn, CSV.stringify(data));
};
export const addRecordCSV = async (fn, json) => {
  const data = await loadCSV(fn);
  console.log(fn, data)
  data.push(json);
  await writeCSV(fn, data);
};
