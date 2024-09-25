import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
// import { productSchema } from "./models/productModel.jsx";
const app = express();
const port = 8000;
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Yap yess")
})

app.post("/products", async (req, res) => {   
  // console.log(req.body)
  // res.send(req.body) 
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);    
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message});
  }
})

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected!')
    app.listen(8000, () => console.log("Listening on port 3000"))
  }).catch( (error) => {
    console.log(error);
  });


  


