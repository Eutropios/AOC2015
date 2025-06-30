import * as fs from "node:fs";

const data = fs.readFileSync("src/day3/input.txt", "utf-8").trim();

const splitPaths = (data: string): string[] => {
    let santaPath = "";
    let robotPath = "";
    for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
            santaPath = santaPath + data[i];
        } else {
            robotPath = robotPath + data[i];
        }
    }
    return [santaPath, robotPath];
};

const paths = splitPaths(data);
const santaPath = paths[0];
const robotPath = paths[1];

const santaVisited = [[0, 0]];
const robotVisited = [[0, 0]];

const findHouses = (path: string, visited: number[][]): void => {
    for (let i = 0; i < path.length; i++) {
        const lastHouse = visited[visited.length - 1];
        if (path[i] === "v") {
            visited.push([lastHouse[0], lastHouse[1] - 1]);
            continue;
        }
        if (path[i] === "^") {
            visited.push([lastHouse[0], lastHouse[1] + 1]);
            continue;
        }
        if (path[i] === ">") {
            visited.push([lastHouse[0] + 1, lastHouse[1]]);
            continue;
        }
        if (path[i] === "<") {
            visited.push([lastHouse[0] - 1, lastHouse[1]]);
        }
    }
};

findHouses(santaPath, santaVisited);
findHouses(robotPath, robotVisited);

const totalHouses = santaVisited.concat(robotVisited);

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

const result = normalize(totalHouses).length;
console.log(result);
