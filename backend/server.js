import express from 'express'
import { products } from './data/products.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to node server</h1>')
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product)
})

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {console.log(`server is running on ${process.env.NODE_ENV} on port ${process.env.PORT}`)})





