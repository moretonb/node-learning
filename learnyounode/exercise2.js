var sum = process.argv.slice(2).reduce((previous, current, index, array) => {
    return +previous + +current;
});

console.log(sum);