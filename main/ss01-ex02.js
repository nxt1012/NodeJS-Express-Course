const fs = require('fs');

const callback = (err, data) => {
    console.log(data)
}

fs.readFile('./starter/txt/read-this.txt', 'utf-8', callback);
fs.readFile('./starter/txt/input.txt', 'utf-8', callback);
fs.readFile('./starter/txt/append.txt', 'utf-8', callback);

// TODO: Tìm cách sử dụng writeFile với async/await để làm Exercise 02
