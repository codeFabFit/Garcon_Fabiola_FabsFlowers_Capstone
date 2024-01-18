import express from 'express';
import data from './data.js';
import cors from 'cors'

const app = express();
app.use(cors())

// path 
app.get('/api/products', (req, res) => {
    // here we are call the data from the backend
    // made a copy and paste of data into backend 
    // call that data here to use and specific area target
    res.send(data.products);
});

// getting data from back end using specific slug of product to show data
app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    // catching error
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: "No Product Found"});
    }
});



const port = process.env.PORT || 5000
// send the port that is going to listen to the call
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})


