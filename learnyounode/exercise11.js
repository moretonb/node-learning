const http = require("http");
const fs = require("fs");

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer((req, res) => {
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port);