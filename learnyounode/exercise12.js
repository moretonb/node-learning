const http = require("http");
const map = require("through2-map");
const uppercase = require("upper-case");

var port = process.argv[2];

var server = http.createServer((req, res) => {
    req.pipe(map((chunk) => {
        return uppercase(chunk.toString());
    })).pipe(res);
});

server.listen(port);