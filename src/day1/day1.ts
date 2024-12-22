import * as fs from "node:fs";

let data = fs.readFileSync("./inputstring.txt", "utf-8");
console.log(data);
