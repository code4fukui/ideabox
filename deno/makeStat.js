import { names } from "./names.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { addRecordCSV } from "./addRecordCSV.js";

// {"success":true,"message":"Data retrieved successfully","data":{"user_count":11,"idea_count":6,"comment_count":1}}
for (const name of names) {
  const url = `https://${name}-api.ideabox.cloud/v1/statistics`;
  const json = await (await fetch(url)).json();
  json.data.date = new DateTime().toString();
  await addRecordCSV(`../data/${name}/stat.csv`, json.data);
}
