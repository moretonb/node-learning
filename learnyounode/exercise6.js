const directoryFilter = require("./exercise6_1.js");

var dir = process.argv[2];
var extension = "." + process.argv[3];

directoryFilter(dir, extension, (err, data) => {
    if (err) 
        return console.log(err);
        
    console.log(data);
});