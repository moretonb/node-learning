var api = require('./src/api')

var server = api()
var port = process.env.PORT || 3001
var ip = process.env.IP || '127.0.0.1'

server.listen(port, ip, () => { 
    console.log('Server ready at %s:%d', ip, port) 
})
