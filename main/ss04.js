const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }))


// Express là một framework server được xây dựng dựa trên nền tảng NodeJS
// Express giúp chúng ta dễ dàng sử dụng các hàm có sẵn để viết API dễ dàng hơn
// Ưu điểm: Express hoạt động nhanh, câu lệnh ngắn gọn
// Nhược điểm: là nhược điểm của NodeJS
// Routing trong express
const dataUser = {
  user: [
    {
      name: "John",
      address: "Tòa nhà sông Đà",
      phone: "0123456789",
    },
    {
        name: "Nam",
        address: "Kinh",
        phone: "0987654321",
      },
      {
        name: "Hàn",
        address: "Xì",
        phone: "0918273645",
      },
  ],
};


app.get("/", (req, res) => {
  res.send("<h1>Đây là home page</h1>");
});

app.get("/products", (req, res) => {
    const dataUser = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    res.send(dataUser);
  });

  app.get("/product-detail", (req, res) => {
    res.send("<h1>Đây là product detail page</h1>");
  });

  app.post('/product', (req, res) => {
    const data = req.body;
    dataUser.user.push(data);
    fs.writeFile("./data.json", JSON.stringify(dataUser), err => {
        if (err) throw err;
        console.log(fs.readFileSync("./data.json", "utf8"));
    })
    res.send(dataUser)
    console.log(req.body)
  })

app.get("/json/:id", (req, res) => {
    // req là một object chứa toàn bộ thông tin người dùng gửi về cho server
    // console.log(req);
    // console.log(req.query)
    console.log(req.params.id)
    // res là một object chứa các phương thức mà server gửi về cho client
    // console.log(res)
    res.json(user)
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
