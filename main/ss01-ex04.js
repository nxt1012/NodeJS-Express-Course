const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write(`<h1>Bài tập 04</h1>`)
    res.end();
})

server.listen(port, host, () => {
    console.log(`listening on http://localhost:${port}`);
})