import express  from "express";
import Product from '../Models/productModel.js'
import data from '../data.js'
import User from "../Models/userModel.js";

const seedRouter = express.Router();

// keep getting error that is will not send data back 
// saying that insertALL is not a function

seedRouter.get('/', async (req, res) => {
        try {
            // products
        await Product.deleteMany({})
        const createdProducts = await Product.insertMany(data.products);
        // res.send({createdProducts})
        // users
        await User.deleteMany({});
        const createdUsers = await User.insertMany(data.users);
        res.send({createdProducts, createdUsers})    
        } catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error')
        }
        
});

export default seedRouter;

