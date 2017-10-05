const fs = require("fs");

var path = process.argv[2];

fs.readFile(path, "utf8", (err, data) => {
    if (err) throw err;
    
    var newLines = data.split("\n").length - 1;
    console.log(newLines);
});
