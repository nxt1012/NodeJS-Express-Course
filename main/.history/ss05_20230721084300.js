const express = require('express');
const port = 3000;

const app = express();
const user = {
    username: "CaoTV",
    password: "12321"
}

const reqUser = {
    username: "CaoTV",
    password: "12321"
}

const middleWareCheckLogin = (req, res, next) => {
    // logic code của middleware
    if (reqUser.username == user.username && ) {
        console.log('Login success');
        next();
    } else {
        console.log('Login error');
        res.redirect('/login')
    }
}

app.get('/', (req, res) => {
    res.send('<h1>Đây là homepage</h1>')
});

app.get('/payment', middleWareCheckLogin ,(req, res) => {
    res.send('<h1>Đây là thanh toán, trang này yêu cầu đăng nhập</h1>')
});

app.get('/login' ,(req, res) => {
    res.send('<h1>Đây là trang đăng nhập</h1>')
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});