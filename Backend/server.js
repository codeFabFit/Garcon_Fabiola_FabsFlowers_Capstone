import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (res, req) => {
    // here we are call the data from the backend
    // made a copy and paste of data into backend 
    // call that data here to use and specific area target
    res.send(data.products)
})

const port = process.env.PORT || 5173
// send the port that is going to listen to the call
app.listen(port, () => {
    console.log(`serve at https://localhost:${port}`)
})
