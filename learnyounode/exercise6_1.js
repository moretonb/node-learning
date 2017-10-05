const fs = require("fs");
const path = require("path");

module.exports = (dir, extension, callback) => {
    fs.readdir(dir, (err, list) => {
        if (err) 
            return callback(err);
        
        list.forEach((value, index, array) => {
            if (path.extname(value) === extension) {
                callback(null, value);
            }
        });
    });
}