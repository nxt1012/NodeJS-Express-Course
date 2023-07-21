const fs = require("fs");


// fs.writeFileSync("./ss03/data/content.txt", "Hello World Rikkeier")
// console.log("Write file successfully")

// const data = fs.readFileSync("./ss03/data/content.txt", "utf8");
// console.log(data)

// const firstData = fs.readFileSync("./ss03/data/first-data.txt", "utf8");
// console.log(firstData)
// const middleData = fs.readFileSync("./ss03/data/middle-data.txt", "utf8");
// console.log(middleData)
// const lastData = fs.readFileSync("./ss03/data/last-data.txt", "utf8");
// console.log(lastData)

// fs.writeFileSync("./ss03/data/final.txt",`${firstData}\n${middleData}\n${lastData}`);
// console.log(fs.readFileSync("./ss03/data/final.txt"))


// fs.readFile("./ss03/data/content.txt", "utf8", (err, data) => {
//     if (err) {
//         console.err(err);
//         return;
//     }
//     console.log(data)
// })

// Serving file tĩnh sử dụng module FS;
const http = require("http");
const port = 3000;
const nodeStatic = require("node-static");
const file = new nodeStatic.Server("./ss03/public")

const server = http.createServer((req, res)=> {
    file.serve(req, res);
    let readContentHtml = fs.readFileSync("./ss03/views/content.html", "utf8");
    console.log(readContentHtml);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
    res.write(readContentHtml);
    res.end();

    //update thêm string = talking about Products và lưu lại

    const firstData = fs.readFileSync("./ss03/data/first-data.txt", "utf8");
console.log(firstData)

    let newData = "talking about Products";
    let newFirstData = `${firstData} is ${newData}`;
    console.log(newFirstData);
    fs.writeFileSync("./ss03/data/first-data.txt", newFirstData);
})
server.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
})

