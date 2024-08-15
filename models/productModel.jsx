import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;