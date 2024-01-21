import express  from "express";
import product from '../Models/productModel.js'
import data from '../data.js'

const seedRouter = express.Router();

// keep getting error that is will not send data back 
// saying that insertALL is not a function

seedRouter.get('/', async (req, res) => {
    product.remove({});
        const createdProducts = await product.insertAll(data.products);
        res.send({createdProducts})
})

export default seedRouter;



