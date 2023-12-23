const express = require("express");

const { sequelize } = require("./models");
const letterRouter = require("./routes/letterRouter");

const cors = require("cors");
const app = express();
app.set("port", process.env.PORT || 5000);
app.use(cors());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", letterRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
