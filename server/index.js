const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var userRegister = require("./Routes/userRoutes");

const app = express();

app.use(express.json());

require("dotenv").config();

app.use(
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  },
  cors({
    credentials: true,
  })
);

// app.use("/", (req ,res) =>{
//     res.send('hi')
// });
//pp.use('/register', function(){userRegister});
// app.use("/hello", (req, res) => {
//   res.send("Hellllo")
// })

app.use("", userRegister);

mongoose.set("strictQuery", true);
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
    },
    console.log("MongoDB Connected Successfully....")
  )
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
