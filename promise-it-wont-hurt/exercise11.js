function all(first, second) {
  var values = []
  var count = 0
  return new Promise((fulfill, reject) => {
    first.then((value) => { increment(value, 0, fulfill) })
    second.then((value) => { increment(value, 1, fulfill) })
  });
  
  function increment(value, position, done) {
    ++count
    values[position] = value
    if (count >= 2) {
      done(values)
    }
  }
}

all(getPromise1(), getPromise2())
  .then(console.log)