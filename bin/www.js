const express = require('express');
const next = require('next');
const path = require('path');

module.exports = {
    entry:'../.next/server/pages/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}

const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.use('/dist', express.static(path.join(__dirname,'dist')));

app.prepare().then(() => {
    const server = express();

    server.use('/', express.static(path.join(__dirname, 'public')));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.get('*', (req, res) => {
        const route = path.join(__dirname, '..', 'dist', 'index.html');
        res.sendFile(route);
        handle(req, res);
    });

    server.listen(prod ? process.env.PORT : 8000, () => {
        console.log(`running port ${prod ? process.env.PORT : 8000}`);
    })
})