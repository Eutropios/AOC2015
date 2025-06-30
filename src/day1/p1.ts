import * as fs from "node:fs";

const data = fs.readFileSync("src/day1/input.txt", "utf-8").trim();
let upFloors = 0;
let downFloors = 0;
for (const chara of data) {
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
