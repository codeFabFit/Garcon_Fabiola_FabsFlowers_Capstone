// getting users 

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false, unique: true},

    },
    {
        timestamp: true,
    },
);

const product = mongoose.model('product', productSchema)

export default productSchema;