const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true)

    const dataJson = fs.readFileSync("./starter/dev-data/data.json", "utf8");
    const dataObject = JSON.parse(dataJson);

    const readOverview = fs.readFileSync("./starter/templates/overview.html", "utf8");
    const readProduct = fs.readFileSync("./starter/templates/product.html", "utf8");

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if (pathname === "/") {
        res.write("<h1>This is homepage</h1>")
    } else if (pathname === "/overview") {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8"});
        res.write(readOverview)
    } else if (pathname === "/product") {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8"});
        res.write(readProduct)
    } else {
        const pathArr = pathname.split("/");
        let id = pathArr[pathArr.length - 1];
        let data = dataObject.find((data) => data.id == id);
        if (data) {
            res.write(JSON.stringify(data))
        } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8"});
        res.write("<h1>PAGE NOT FOUND</h1>")
        }
    }
    res.end();
})
server.listen(port, host, () => {
    console.log(`listening on port http://localhost:${port}`)
})