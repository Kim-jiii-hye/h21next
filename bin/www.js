const express = require('express');
const next = require('next');

const dev = true
const app = next({ dev })
const handle = app.getRequestHandler()

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(3000, err => {
            if (err) throw err
            console.log('>Ready on http://localhost:3000')
        })
    })

require('./next-server');