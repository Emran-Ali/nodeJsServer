const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const a = url.parse(req.url, true);
    const fileNa = `.${a.path}`;
    console.log(fileNa);
    fs.readFile(`.${fileNa}`, (err, data) => {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html' });
            return res.end(`file not found : ${err.message}`);
        }

        res.writeHead(200, { 'content-Type': 'text/html' });
        console.log(data);
        res.write(data);
        return res.end();
    });
}).listen(8080);
