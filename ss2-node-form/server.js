const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const getForm = fs.readFileSync("./views/get-form.html", "utf-8")
  const postForm = fs.readFileSync("./views/post-form.html", "utf-8")
  console.log(postForm);
  res.write(postForm);
  res.end();

  const query = url.parse(req.url, true);
  console.log(query.query.name);

});
server.listen(port, () => {
  console.log(`app listen on http://localhost:${port}`);
});
