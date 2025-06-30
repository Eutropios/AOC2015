import * as fs from "node:fs";

const data = fs
    .readFileSync("src/day2/input.txt", "utf-8")
    .trim()
    .split(/[\r\n]+/);
const findSmallestSideArea = (pLength: number, pWidth: number, pHeight: number): number =>
    Math.min(pLength * pWidth, pWidth * pHeight, pLength * pHeight);

const findSurfaceArea = (pLength: number, pWidth: number, pHeight: number): number =>
    2 * pLength * pWidth + 2 * pLength * pHeight + 2 * pWidth * pHeight;

const findTotalSurfaceArea = (data: string[]): number => {
    let totalSurfaceArea = 0;
    for (const arr of data) {
        const dimensions = arr.split(/x/g);
        const pLength = Number.parseInt(dimensions[0], 10);
        const pWidth = Number.parseInt(dimensions[1], 10);
        const pHeight = Number.parseInt(dimensions[2], 10);
        totalSurfaceArea +=
            findSmallestSideArea(pLength, pWidth, pHeight) +
            findSurfaceArea(pLength, pWidth, pHeight);
    }
    return totalSurfaceArea;
};

console.log(findTotalSurfaceArea(data));
