// creating the mongoose scheme 

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
        slug: { type: String, required: true, unique: true},
        image: { type: String, required: true, unique: true},
        category: { type: String, required: true, unique: true},
        description: { type: String, required: true, unique: true},
        price: { type: Number, required: true, unique: true},
        countInStock: { type: Number, required: true, unique: true},
        numReviews: { type: Number, required: true, unique: true},

    },
    {
        timestamp: true,
    },
);

const Product = mongoose.model('Product', productSchema)

export default productSchema;