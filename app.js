const express = require("express");
const models = require('./models/index.js');
const figlet = require("figlet");

const app = express();

// DB 연결
models.sequelize.sync()
    .then(() => {
        console.log(figlet("Enable to connect to the database", function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        }));
    })
    .catch(err => {
        console.log(figlet("Unable to connect to the database", function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        }));
        console.log(err);
    });

// root
app.get("/", (req, res) => {
    res.send('my node study');
});

// 바디파서 사용을 위한 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
    console.log('server running');
});
