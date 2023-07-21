const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  // Đọc file overview.html
  const overviewTemplate = fs
    .readFileSync("./starter/templates/overview.html")
    .toString();
  // Đọc file card-template.html
  const cardTemplate = fs
    .readFileSync("./starter/templates/card-template.html")
    .toString();
  // Đọc dữ liệu file product.html
  const productTemplate = fs
    .readFileSync("./starter/templates/product.html")
    .toString();
// Đọc dữ liệu file create.html
    const createTemplate = fs.readFileSync("./starter/templates/create.html")
    .toString();
  // Đọc dữ liệu file data.json
  const dataJson = fs.readFileSync("./starter/dev-data/data.json").toString();

  console.log("cardTemplate: ", cardTemplate);

  console.log(req.url);
  if (req.url === "/" || req.url === "/overview") {
    // Đọc dữ liệu trong file data.json
    fs.readFile("./starter/dev-data/data.json", "utf-8", (err, result) => {
      // Kết quả trả về
      // Thất bại
      if (err) throw err;
      // Thành công
      // Tiến hành đổ dữ liệu vào trong file card-template.html
      const listFruit = JSON.parse(result);
      const fruitData = listFruit
        .map((fruit) => {
          return cardTemplate
            .replace(/{{image}}/g, fruit.image)
            .replace("{{productName}}", fruit.productName)
            .replace("{{price}}", fruit.price)
            .replace("{{quantity}}", fruit.quantity)
            .replace("{{id}}", fruit.id);
        })
        .join("");

      const htmls = overviewTemplate + fruitData;
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(htmls);
      res.end();
    });
  } else if (req.url.startsWith("/product")) {
    const idUrl = req.url.split("/")[2];

    // Kiểm tra xem id lấy từ url có tồn tại trong db hay không
    const product = JSON.parse(dataJson).find((pr) => pr.id === +idUrl);

    // Gán lại giá trị cho các thông tin (placeholder)
    const productData = productTemplate
      .replace(/{{image}}/g, product.image)
      .replace(/{{price}}/g, product.price)
      .replace("{{from}}", product.from)
      .replace("{{nutrients}}", product.nutrients)
      .replace("{{quantity}}", product.quantity)
      .replace("{{description}}", product.description)
      .replace("{{productName}}", product.productName)
      .replace("{{id}}", product.id)
      .replace("{{organic}}", product.organic ? "Organic" : "");

    console.log(productData);

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(productData);
    res.end();
  } else if (req.url.startsWith("/search")) {
    // Lấy giá trị trên url
    const valueUrl = url.parse(req.url, true);
    // Value search
    const valueSearch = valueUrl.query.q;
    console.log(valueUrl);
    // Tìm kiếm thông tin product theo productName
    const results = JSON.parse(dataJson).filter((pr) => pr.productName.includes(valueSearch))

    // Đọc file search.html
    const searchTemplate = fs
      .readFileSync("./starter/templates/search.html")
      .toString();

    const searchResults = results.map((result) => {
        
            return cardTemplate
              .replace(/{{image}}/g, fruit.image)
              .replace("{{productName}}", fruit.productName)
              .replace("{{price}}", fruit.price)
              .replace("{{quantity}}", fruit.quantity)
              .replace("{{id}}", fruit.id);
          
    }).join("")

    // Nối searchTemplate với cardTemplate
    const htmls = searchTemplate + cardTemplate;

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(htmls);
    res.end();
  } else if (req.url.startsWith("/delete")){
    // Lấy id trên url
    const idUrl = req.url.split("/"[2]);
    console.log("idUrl", idUrl);

    // Lọc ra những product có id khác với id truyền vào
    const newListProduct = JSON.parse(dataJson).filter(pr => pr.id !== +idUrl);
    console.log(("newListProduct", newListProduct));

    fs.writeFileSync("./starter/dev-data/data.json", JSON.stringify(newListProduct), "utf8")
    // Chuyển hướng về trang home
    res.writeHead (302, {Location: "./"})
    res.end();


  } else if(req.url.startsWith("/create")){

    res.write(createTemplate);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Not found</h1>");
    res.end();
  }
});
server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
