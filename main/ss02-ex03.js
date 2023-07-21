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
    const readCreate = fs.readFileSync("./starter/templates/create.html", "utf8");


    let cardTemplate = fs.readFileSync("./starter/templates/card-template.html", "utf8");
    const replaceDataCard = dataObject.map((fruit) => {
        return (
            cardTemplate
            .replace("{{image}}", fruit.image)
            .replace("{{productName}}", fruit.productName)
            .replace("{{quantity}}", fruit.quantity)
            .replace("{{price}}", fruit.price)
            .replace("{{id}}", fruit.id)
            .replace("{{card__detail}}", fruit.organic ? "card__detail--organic" : "not-organic")
        )
    })
    const renderOverview = readOverview.replace("{{figure}}", replaceDataCard);

    const readSearch = fs.readFileSync("./starter/templates/search.html", "utf8")

    res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if (pathname === "/" || pathname === "/overview") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
        res.write(renderOverview)
    } else if (pathname === "/product") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
        res.write(readProduct)
    } else if (pathname === "/search") {
        let suburl = url.parse(req.url);
        console.log(suburl);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
        res.write(readSearch)
        


    } else if (pathname === "/create") {
        //get data from post request
        if (req.method == "POST") {
            let data = "";
            req
              .on("error", (err) => {
                console.error(err);
              })
              .on("data", (chunk) => {
                console.log(chunk);
                data += chunk.toString(); 
                
              })
              .on("end", () => {
                let arrQueryString = data.split("&");
                let arrQueryStringPair = arrQueryString.map(arr => {
                    let splitArr = arr.split("=");
                    return [splitArr[0], splitArr[1]]
                })
                const entries = new Map(arrQueryStringPair);
                const queryStringPair = Object.fromEntries(entries);
                for(let key in queryStringPair) {
                    queryStringPair[key] = queryStringPair[key].split("+").join(" ");
                }
                console.log(queryStringPair)

                //tìm kiếm trong data.json
                

                //lý giải đoạn này
                // let queryString = url.parse(`${route}?${data}`, true).query;
                // let newFruit = { ...queryString };
                // console.log(newFruit);
              });
             
          }
          
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
        res.write(readCreate)

    } else {
        const pathArr = pathname.split("/");
        let id = pathArr[pathArr.length - 1];
        let data = dataObject.find((data) => data.id == id);
        if (data) {
            let renderProduct = readProduct
            .replace("{{productName}}", data.productName)
            .replace("{{from}}", data.from)
            .replace("{{nutrients}}", data.nutrients)
            .replace("{{quantity}}", data.quantity)
            .replace("{{description}}", data.description);
            while (renderProduct.includes("{{image}}")){
                renderProduct = renderProduct.replace("{{image}}", data.image)
            }
            while (renderProduct.includes("{{price}}")){
                renderProduct = renderProduct.replace("{{price}}", data.price)
            }
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
            res.write(renderProduct)
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