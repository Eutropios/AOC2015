import { readFileSync } from "node:fs";
import { md5 } from "js-md5";

const data = readFileSync("src/day4/input.txt", "utf-8").trim();

const findLowestInt = (prefix: string = "00000"): [number, string] => {
    let int = 0;
    while (true) {
        const hashed = md5(`${data}${int}`);
        if (hashed.startsWith(prefix)) {
            return [int, hashed];
        }
        int++;
    }
};

const [int, hash] = findLowestInt("000000");
console.log(`Lowest int: ${int}\tHash: ${hash}`);
