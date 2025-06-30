import * as fs from "node:fs";

const data = fs
    .readFileSync("src/day2/input.txt", "utf-8")
    .trim()
    .split(/[\r\n]+/);

const findRibbonWrapLength = (pLength: number, pWidth: number, pHeight: number): number =>
    Math.min(2 * pLength + 2 * pHeight, 2 * pLength + 2 * pWidth, 2 * pWidth + 2 * pHeight);
const findTotalRibbonLength = (data: string[]): number => {
    let totalRibbon = 0;
    for (const arr of data) {
        const dimensions = arr.split(/x/g);
        const pLength = Number.parseInt(dimensions[0], 10);
        const pWidth = Number.parseInt(dimensions[1], 10);
        const pHeight = Number.parseInt(dimensions[2], 10);
        totalRibbon += pLength * pWidth * pHeight + findRibbonWrapLength(pLength, pWidth, pHeight);
    }
    return totalRibbon;
};

console.log(findTotalRibbonLength(data));
