//để chạy được dòng này cần thêm dòng "type": "module" vào trong package.json (ngang cấp và phía trên với dependencies)
//nguồn: https://bobbyhadz.com/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module
import { readFileSync, writeFileSync } from 'node:fs';

//sử dụng readFileSync để đọc dữ liệu từ read-this.txt
const readThis = readFileSync('./starter/txt/read-this.txt', 'utf-8');
console.log("read-this.txt: ",readThis);
//sử dụng readFileSync để đọc dữ liệu từ input.txt
const input = readFileSync('./starter/txt/input.txt', 'utf-8');
console.log("input.txt: ",input);
//sử dụng readFileSync để đọc dữ liệu từ input.txt
const append = readFileSync('./starter/txt/append.txt', 'utf-8');
console.log("append.txt: ",append);
//nối dữ liệu: thêm append vào sau input
const final = `${input}\n${append}`
console.log("final.txt: ",final);
//ghi dữ liệu vào file final.txt
writeFileSync('./starter/txt/final.txt', final, 'utf-8');
console.log('final.txt', readFileSync('./starter/txt/final.txt', 'utf-8'));