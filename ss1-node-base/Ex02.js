// cú pháp copy từ docs về có vẻ như kiểu TypeScript
// Bài này nếu muốn làm theo kiểu async/await thì trước hết cần phải convert các hàm callbacks về dạng promises
// https://anonystick.com/blog-developer/converting-callbacks-to-promises-2019100423712485
import { readFile, writeFile } from 'node:fs';

const callback = (error, result) => {
    console.log(result);
}
readFile('./starter/txt/read-this.txt', 'utf-8', callback)

let input, append;
readFile('./starter/txt/input.txt', 'utf-8', (error, result) => {
    console.log(result);
    input = result;
})
readFile('./starter/txt/append.txt', 'utf-8', (error, result) => {
    console.log(result);
    append = result;
})
writeFile('./starter/txt/final.txt', `${input}\n${append}`, (error, result) => {
    readFile('./starter/txt/final.txt', 'utf-8', (error, result) => {
        console.log(result);
    })
})