import * as fs from "node:fs";

const data = fs.readFileSync("./inputstring.txt", "utf-8");
let upFloors = 0;
let downFloors = 0;
for (let chara of data) {
    if (chara === "(") {
        upFloors++;
    }
    if (chara === ")") {
        downFloors++;
    }
}

console.log(`Ups: ${upFloors}`);
console.log(`Downs: ${downFloors}`);
console.log(`Number: ${upFloors - downFloors}`);
