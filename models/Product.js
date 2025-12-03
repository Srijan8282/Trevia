import mongoose from "mongoose";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
const productSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: "user"},
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    offerPrice: {type: Number, required: true},
    image: {type: Array, required: true},
    category : {type: String, required: true},
    date : {type: Number , required: true}
})

const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product