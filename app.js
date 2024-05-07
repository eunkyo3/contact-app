const express = require("express");
const models = require('./models/index.js');
const app = express();

// DB 연결
models.sequelize.sync().then(() => {
    console.log('DB 연결 성공');
}).catch(err => {
    console.log("DB 연결 실패");
    console.log(err);
})

// root
app.get("/", (req, res) => {
    res.send('my node study');
});

// 바디파서 사용을 위한 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, ()=>{
    console.log('server running');
})