const express = require('express');
const port = 3000;

const app = express();

const middleWareCheckLogin = (req, res, next) => {
    // logic code của middleware
    if (false) {
        console.log('Login success');
        next();
    } else {
        console.log('Login error');
        res.redir
    }
}

app.get('/', (req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.get('/payment', middleWareCheckLogin ,(req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.get('/login' ,(req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});