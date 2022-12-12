const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}, 
cors({
  credentials: true
}));

app.use("/", (req ,res) =>{
    res.send('hi')
});



mongoose
  .connect(
    `mongodb+srv://root:Tomandjerry03@cluster0.hb7rq.mongodb.net/myapp?retryWrites=true&w=majority`,
    console.log("MongoDB Connected Successfully....")
  )
  .then(() => {
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
