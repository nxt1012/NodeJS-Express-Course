const express = require('express');
const port = 3000;

const app = express();

const middleWareCheckLogin = (req, res, next) => {
    // logic code của middleware
    if (failed) {
        console.log('Login success');
        next();
    } else {
        console.log('Login error');
    }
}

app.get('/', middleWareCheckLogin ,(req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});