const fs = require("fs");

var path = process.argv[2];
var content = fs.readFileSync(path).toString();
var newLines = content.split("\n").length - 1;

console.log(newLines);