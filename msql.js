const mysql = require('mysql');
const http = require('http');
const url = require('url');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'skills',
});

http.createServer((req, res) => {
    const a = url.parse(req.url, true);
    if (a.pathname === '/show') {
        con.connect((err) => {
            if (err) {
                console.log('Connection error');
                throw err;
            }
            const sql = 'SELECT * FROM genaralskills';
            con.query(sql, (err1, data) => {
                if (err1) {
                    console.log('Query Error');
                    throw err;
                }
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write(JSON.stringify(data));
                res.end();
            });
            con.end();
        });
    } else {
        res.writeHead(404, { 'content-Type': 'text/html' });
        res.end('only permite to show data');
    }
}).listen(8080);

// con.end();
