import * as fs from "node:fs";

const data = fs.readFileSync("src/day3/input.txt", "utf-8").trim();

const visited = [[0, 0]];
console.log(visited.length);

for (let i = 0; i < data.length; i++) {
    const lastHouse = visited[visited.length - 1];
    if (data[i] === "v") {
        visited.push([lastHouse[0], lastHouse[1] - 1]);
        continue;
    }
    if (data[i] === "^") {
        visited.push([lastHouse[0], lastHouse[1] + 1]);
        continue;
    }
    if (data[i] === ">") {
        visited.push([lastHouse[0] + 1, lastHouse[1]]);
        continue;
    }
    if (data[i] === "<") {
        visited.push([lastHouse[0] - 1, lastHouse[1]]);
    }
}

function arrayEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function contains(array: number[][], item: number[]): boolean {
    for (let i = 0; i < array.length; ++i) {
        if (arrayEqual(array[i], item)) {
            return true;
        }
    }
    return false;
}

function normalize(array: number[][]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < array.length; ++i) {
        if (!contains(result, array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const result = normalize(visited).length;
console.log(result);
