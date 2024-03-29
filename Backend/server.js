import express from 'express';
import data from './data.js';
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './Routes/seedRoutes.js';
import productRouter from './Routes/productRoutes.js';
import userRouter from './Routes/userRoutes.js';





const app = express();
// const corsOption = {
//     origin: 'http://localhost:5000', 
//     optionsSuccessStatus: 200
// }
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


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



app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)



// handle error handler

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});


// getting data from back end using specific slug of product to show data


const port = process.env.PORT || 5000
// send the port that is going to listen to the call
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})


