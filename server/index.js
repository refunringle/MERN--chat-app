const express = require("express");
const cors = require("cors");
//const dotenv = require ('dotenv')
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

require("dotenv").config()


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
    process.env.MONGO_URI,  {
        useNewUrlParser: true,
      },
    console.log("MongoDB Connected Successfully....")
  )
  .then(() => {
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
