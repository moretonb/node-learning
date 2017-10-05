const fs = require("fs");
const path = require("path");

var pathToDir = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(pathToDir, (err, list) => {
    if (err) throw err;
    
    list.forEach((value, index, array) => {
        if (path.extname(value) === extension) {
            console.log(value);
        }
    });
});