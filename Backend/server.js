import express from 'express';
import data from './data.js';

const app = express();
// path 
app.get('/api/products', (req, res) => {
    // here we are call the data from the backend
    // made a copy and paste of data into backend 
    // call that data here to use and specific area target
    res.send(data.products)
})

const port = process.env.PORT || 5000
// send the port that is going to listen to the call
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})
