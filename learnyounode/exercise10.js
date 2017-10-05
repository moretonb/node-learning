const net = require("net");
const dateformat = require("dateformat");

var port = process.argv[2];

var server = net.createServer((socket) => {
    var now = new Date();
    var formattedDate = dateformat(now, "yyyy-mm-dd HH:MM");
    socket.end(formattedDate + "\n");
});

server.listen(port);