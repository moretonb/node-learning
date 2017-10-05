const http = require("http");

module.exports = (uri, callback) => {
    http.get(uri, (response) => {
        response.setEncoding('utf8');
    
        var content = "";
        response.on("data", (data) => {
            if (data) {
                content += data;
            } 
        });
        
        response.on("end", () => {
            callback(content);
        });
    });
}