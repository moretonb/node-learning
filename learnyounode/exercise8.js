const http = require("http");

var uri = process.argv[2];

http.get(uri, (response) => {
    response.setEncoding('utf8');
  
    var content = "";
    response.on("data", (data) => {
        if (data) {
            content += data;
        } 
    });
    
    response.on("end", () => {
        console.log(content.length);
        console.log(content);
    });
});