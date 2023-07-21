const http = require("http");
const url = require("url");
const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    res.write("<h1>This is homepage</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>This is overview page</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>This is product page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>PAGE NOT FOUND</h1>");
  }
  res.end();
});
server.listen(port, "127.0.0.1", function () {
  console.log(`listening on port: ${port}`);
});