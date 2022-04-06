const express = require('express');
const next = require('next');

const dev = true
const app = next({ dev })
const handle = app.getRequestHandler() //next routing

app
    .prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(8000, err => {
            if (err) throw err
            console.log('>Ready on http://localhost:8000')
        })
    })

// require('./next-server');