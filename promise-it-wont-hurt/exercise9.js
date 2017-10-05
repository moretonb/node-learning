function parsePromised(json) {
  return new Promise((fulfill, reject) => {
    try {
      var parsedJson = JSON.parse(json)
      return fulfill(parsedJson)
    } catch (error) {
      return reject(error)
    }
  })
}

parsePromised(process.argv[2])
  .catch(console.log)

//had to hack around pathing issue when verifying the exercise