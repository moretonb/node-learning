var promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED')
  reject(new Error('I DID NOT FIRE'))
}).then(console.log, onRejected)

function onRejected(error) {
  console.log(error.message)
}