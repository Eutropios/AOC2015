"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var data = fs.readFileSync("./inputstring.txt", "utf-8");
var upFloors = 0;
var downFloors = 0;
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var chara = data_1[_i];
    if (chara === "(") {
        upFloors++;
    }
    if (chara === ")") {
        downFloors++;
    }
}
console.log("Ups: ".concat(upFloors));
console.log("Downs: ".concat(downFloors));
console.log("Number: ".concat(upFloors - downFloors));
