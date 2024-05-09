const express = require("express");
const models = require('./models/index.js');
const figlet = require("figlet");
const methodOverride = require("method-override");
require("dotenv").config();

// create server
const app = express();


// port
const port = process.env.PORT || 3000;

// ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 콘텐츠 사용
app.use(express.static("./public"));

app.use(methodOverride("_method"));

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

// 바디파서 사용을 위한 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/loginRoutes"))
app.use("/contacts", require("./routes/contactRoutes"));
app.use("/logout", require("./routes/loginRoutes.js"));

app.listen(port, () => {
    figlet("Server is running", (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        console.log(`Server is running on port ${port}`);
    });
});
