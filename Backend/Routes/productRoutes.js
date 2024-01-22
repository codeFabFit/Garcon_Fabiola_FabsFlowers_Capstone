import express from 'express';
import Product from '../Models/productModel.js'

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find()
    res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({slug:req.params.slug});
    // catching error
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "No Product Found"});
    }
});

productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    // catching error
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "No Product Found"});
    }
});

export default productRouter;

// not seeing back end connection from dev tools network