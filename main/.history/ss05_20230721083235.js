const express = require('express');
const port = 3000;

const app = express();

const middleWareCheckLogin = (req, res, next) => {
    // logic code của middleware
    if (true) {
        ('Login success');
        next();
    } else {
        res.send('Login error');
    }
}

app.get('/', (req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});