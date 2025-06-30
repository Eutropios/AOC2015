import * as fs from "node:fs";

const data = fs.readFileSync("src/day1/input.txt", "utf-8").trim();

const findFloor = (data: string): number => {
    let currentFloor = 0;
    for (let i = 0; i < data.length; i++) {
        if (currentFloor === -1) {
            return i;
        }
        if (data[i] === "(") {
            currentFloor++;
        }
        if (data[i] === ")") {
            currentFloor--;
        }
    }
    return -1;
};

console.log(`Ind #: ${findFloor(data)}`);
