import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.get("/", (req, res) => {
    res.send("Yap yess")
})

app.listen(3000, () => console.log("Listening on port 3000"))