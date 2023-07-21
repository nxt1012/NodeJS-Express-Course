const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    const readFinal = fs.readFileSync('./starter/txt/final.txt', 'utf8');
    console.log(readFinal);
    res.writeHead(200, 'Content-Type', 'html/text; charset=utf8');
    res.writeHead(readFinal)
})

server.listen(port, '127.0.0.1', (err, result) => {
    console.log(`listening on port: http://localhost:${port}`);
});