const fs = require('fs');

const readThis = fs.readFileSync("./starter/txt/read-this.txt", "utf8");
console.log(readThis)

const input = fs.readFileSync("./starter/txt/input.txt", "utf8");
console.log(input)

const append = fs.readFileSync("./starter/txt/append.txt", "utf8");
console.log(append)

const final = `${input}\n${append}`
fs.writeFileSync("./starter/txt/final.txt", final);