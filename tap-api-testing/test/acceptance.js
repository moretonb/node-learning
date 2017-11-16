var tap = require('tap'),
    api = require('../src/api'),
    request = require('request-promise-native')

var port = '1234'
var ip = '127.0.0.1'
var urlBase = 'http://' + ip + ':' + port
var server = api()

tap.test('given a running api', (t) => {
    return new Promise((fulfill, reject) => {
        server.on('error', (e) => {
            reject(e)
        })
    
        server.listen(port, ip, () => {
            fulfill()
        })
    })
}).then((t) => {
    return t.test('when GET on root', (t) => {
        return request({
            uri: urlBase,
            resolveWithFullResponse: true
        }).catch((err) => {
            t.equal(err.response.statusCode, 404, 'then the status code is 404')
            t.end()
        })
    })
}).then((t) => {
    return t.test('when GET on badger', (t) => {
        return request({
            uri: urlBase + '/badger',
            resolveWithFullResponse: true,
            json: true
        }).then((response) => {
            t.equal(response.statusCode, 200, 'then the status code is 200')
            t.equal(response.body.badger.id, 123, 'then the badger has the expected id')
            t.equal(response.body.badger.name, 'atomic badger', 'then the badger has the expected name')
            t.end()
        })
    })
})
    
    
tap.tearDown(() => {
    server.close()
})