var promise = new Promise((fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300)
}).then(undefined, onReject)

function onReject(error) {
  console.log(error.message)
}