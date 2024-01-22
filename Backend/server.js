import express from 'express';
import data from './data.js';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/productRoutes.js';

// connecting mongoose with mongodb 
dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log(err.message)
})

const app = express();
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use(cors())

// path 


// getting data from back end using specific slug of product to show data


const port = process.env.PORT || 5000
// send the port that is going to listen to the call
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})


