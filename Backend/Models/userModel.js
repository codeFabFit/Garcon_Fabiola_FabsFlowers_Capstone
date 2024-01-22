// getting users 

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false, unique: true},

    },
    {
        timestamp: true,
    },
);

const User = mongoose.model('Product', userSchema)

export default User;