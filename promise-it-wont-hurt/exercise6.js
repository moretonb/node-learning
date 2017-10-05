var promise = Promise.reject(new Error('I DID NOT FIRE'))
  .then(console.log)
  .catch(onRejected)

function onRejected(error) {
  console.log(error.message)
}