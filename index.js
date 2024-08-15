import express from "express";
import mongoose from "mongoose";
// import Product from "./models/productModel";
const app = express();

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

mongoose.connect('mongodb+srv://njematitus:eQ7Vtj94osH2cKIF@cluster0.cwx5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
    app.listen(3000, () => console.log("Listening on port 3000"))
  }).catch( (error) => {
    console.log(error);
  });



