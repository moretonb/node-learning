const httpCollect = require("./exercise9_1.js");

var firstUri = process.argv[2];
var secondUri = process.argv[3];
var thirdUri = process.argv[4];

var responseCount = 0;
var firstResponse = "";
var secondResponse = "";
var thirdResponse = "";

httpCollect(firstUri, (data) => {
    firstResponse = data;
    responseCount++;
    printResults();
});

httpCollect(secondUri, (data) => {
    secondResponse = data;
    responseCount++;
    printResults();
});

httpCollect(thirdUri, (data) => {
    thirdResponse = data;
    responseCount++;
    printResults();
});

function printResults() {
    if(responseCount == 3){
        console.log(firstResponse);
        console.log(secondResponse);
        console.log(thirdResponse);
    }
}