// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
//     // không encode utf-8 sẽ dẫn tới hiển thị không đúng tiếng Nhật
//     res.write("<h1>Xin chào NodeJS</h1>");
//     res.end();

// })
// server.listen(3000, function(){
//     console.log('listening on port 3000');
// })
// const http = require("http");
// const url = require("url");
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   const { query, pathname } = url.parse(req.url, true);
//   if (pathname === "/" || pathame === "/home") {
//     res.write("<h1>Welcome to Home Page</h1>");
//   } else if (pathname === "/product") {
//     res.write("<h1>Welcome to Product Page</h1>");
//   } else if (pathname === "/contact") {
//     res.write("<h1>Welcome to Contact Page</h1>");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1>404 Page not found</h1>");
//   }
//   res.end();
// });
// server.listen(port, "127.0.0.1", function () {
//   console.log(`listening on port: ${port}`);
// });



// import { readFileSync } from 'node'
// const readThis = readFileSync('/starter/txt/read-this.txt');

// console.log("read-this.txt", readThis);

// readFileSync('/starter/txt'); 
// const input = readFileSync('/starter/txt/input.txt');
// console.log("input.txt", input);


// readFileSync('/starter/txt'); 
// const append = readFileSync('/starter/txt/append.txt');
// console.log("append.txt", append);


//readFileSync & writeFileSync
// const fs = require("fs");

// try {
//     //readFileSync - read-this.txt
//   const readThis = fs.readFileSync('./starter/txt/read-this.txt', "utf8");
//   console.log("read-this.txt content:", readThis);
//   //readFileSync - input.txt
//   const input = fs.readFileSync('./starter/txt/input.txt', "utf8");
//   console.log("input.txt content:", input);
//   //readFileSync - append.txt
//   const append = fs.readFileSync('./starter/txt/append.txt', "utf8");
//   console.log("append.txt content:", append);
//   //concat input + append => data
//   let data = input + "\n" + append;
//   //writeFileSync => final.txt
//   fs.writeFileSync('./starter/txt/final.txt', data);
//   console.log("final.txt content:", fs.readFileSync('./starter/txt/final.txt', "utf8"));
// } catch (err) {
//   console.error(err);
// }

//readFileSync & writeFileSync
// const fs = require("fs");

// try {
//     //readFile - read-this.txt
// const readThis = fs.readFile('./starter/txt/read-this.txt', "utf8", function(err, readThis) {
//     console.log("read-this.txt content:", readThis);
//   });
  
//   //readFile - input.txt
// const input = fs.readFile('./starter/txt/input.txt', "utf8", function(err, input){
//     console.log("input.txt content:", input);
//   });

//   //readFile - append.txt
// const append = fs.readFile('./starter/txt/append.txt', "utf8", function(err, append){
//     console.log("append.txt content:", append);
//   });
// //   concat input + append => data
//   let data = input + "\n" + append;
//   //writeFile => final.txt
//   fs.writeFile('./starter/txt/final.txt', data, function(err, data){
//     console.log("final.txt content:", fs.readFileSync('./starter/txt/final.txt', "utf8"));
//   });
// } catch (err) {
//   console.error(err);
// }

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const dataText = fs.readFileSync('./starter/txt/read-this.txt', 'utf8');
    console.log(dataText);
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
    res.write(dataText);
    res.end();
});
server.listen(3000, "127.0.0.1", function () {
  console.log(`listening on port: 3000`);
});