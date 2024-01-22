import express  from "express";
import Product from '../Models/productModel.js'
import data from '../data.js'

const seedRouter = express.Router();

// keep getting error that is will not send data back 
// saying that insertALL is not a function

seedRouter.get('/', async (req, res) => {
   await Product.remove({});
        const createdProducts = await Product.insertAll(data.products);
        res.send({createdProducts})
})

export default seedRouter;

