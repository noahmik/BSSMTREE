const express = require("express");
const app = express();
const db = require("./models");
const port = 5000;
const letterRouter = require("./routes/letterRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { sequelize } = require("./models");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결됨.");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", letterRouter);

app.listen(port, () => {
  console.log(`listening  at http://localhost:${port}`);
});
