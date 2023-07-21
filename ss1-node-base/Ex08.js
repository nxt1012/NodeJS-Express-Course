const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  const { query, pathname } = url.parse(req.url, true);
  const data = fs.readFileSync("./starter/dev-data/data.json", "utf8");
  let readOverview = fs.readFileSync("./starter/templates/overview.html", "utf8");
  let readProduct = fs.readFileSync("./starter/templates/product.html", "utf8");
  console.log(data);
  const jsonObject = JSON.parse(data);
 if (pathname === './' || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const overview = fs.readFileSync(
      "./starter/templates/overview.html",
      "utf8"
    );
    console.log(overview, typeof overview);
    res.write(overview);

    /* 
    let card-template = fs.readFileSync("./starter/templates/card-template.html", "utf8"); 
    const replaceData = data.map((fruit) => {
      return (
        cartTemplate
        .replace("{{image}}", fruit.image)
        .replace("{{productName}}", fruit.productName)
        .replace("{{quantity}}", fruit.quantity)
        .replace("{{price}}", fruit.price)
        .replace("{{id}}", fruit.id)
      )
    })
    console.log(replaceData)
    const renderOverview = readOverview.replace("{{cardTemplate}}", replaceData)
    res.write(renderOverview)
    */
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const product = fs.readFileSync("./starter/templates/product.html", "utf8");
    console.log(product, typeof product);
    res.write(product);
  } else if (pathname === "/search") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const search = fs.readFileSync("./starter/templates/search.html", "utf8");
    console.log(search, typeof search);
    res.write(search);
  }else if (pathname === "/api") {
    res.write(data);
  } else {
    const pathArr = pathname.split("/");
    let id = pathArr[pathArr.length - 1];
    let data = jsonObject.find((data) => data.id == id);
    if (data) {
      res.write(JSON.stringify(data));
    } else {
      res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      res.write("<h1>PAGE NOT FOUND</h1>");
    }
  }
  res.end();
});
server.listen(port, "127.0.0.1", function () {
  console.log(`listening on port: ${port}`);
});
