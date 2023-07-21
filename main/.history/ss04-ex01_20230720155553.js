const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("This is homepage")
})

app.get("/overview", (req, res) => {
    res.send("<h1>This is overview page</h1>")
})

app.get("/product", (req, res) => {
    res.send("<h1>This is product page</h1>")
})

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

// TODO: CRUD API
const users = fs.readFileSync("./users.json").toString();
const userJSON = JSON.parse(users)

app.get("/api/v1/users", (req, res) => {
res.status(200).json(JSON.parse(users));
})

app.get("/api/v1/users/:id", (req, res) => {
    const userId = req.params.id;
    const getUserById = userJSON.find(user => user._id === userId);
    res.status(200).json(getUserById);
    })

app.post("/api/v1/users", (req, res) => {
    const userEmail = req.body.email;
    const checkUserByEmail = userJSON.find(user => user.email === userEmail);
    if(!checkUserByEmail) {
        userJSON.push(req.body);
        res.status(200).json({
            message: "Create successfully"
        })
    } else {
        res.status(404).json({
            message: "User already exists"
        })
    }
    })
app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;

    userJSON = userJSON.map((user) => user._id === userId ? {...user, ...updatedUserData} : user);
})

// cách xử lý thêm page not found khi không tìm thấy hoặc sai đường dẫn có sẵn
app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})