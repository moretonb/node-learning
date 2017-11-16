var express = require('express'),
    http = require('http')

module.exports = () => {
    var app = express()
    var server = http.Server(app)

    app.get('/', (req, res) => {
        res.status(404).end()
    })

    app.get('/badger', (req, res) => {
        res.json({ 
            badger: {
                id: 123,
                name: 'atomic badger'
            }
        })
    })

    return server
}