const http = require("http");
const url = require("url");

var port = process.argv[2];

var server = http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);
    var datetime = new Date(parsedUrl.query.iso);
    
    res.writeHead(200, {"Content-Type": "application/json"});
    if (parsedUrl.pathname === "/api/parsetime") {
        res.end(JSON.stringify({
            "hour": datetime.getHours(),
            "minute": datetime.getMinutes(),
            "second": datetime.getSeconds()
        }));
    }
    
    if (parsedUrl.pathname === "/api/unixtime") {
        res.end(JSON.stringify({
            "unixtime": datetime.getTime()
        }));
    }
});

server.listen(port);