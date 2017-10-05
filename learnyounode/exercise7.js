const http = require("http");

var uri = process.argv[2];

http.get(uri, (response) => {
    response.setEncoding('utf8');
  
    response.on("data", (data) => {
        if (data) {
            console.log(data);
        } 
    });
});