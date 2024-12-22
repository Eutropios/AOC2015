"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var data = fs.readFileSync("./inputstring.txt", "utf-8");
console.log(data);
