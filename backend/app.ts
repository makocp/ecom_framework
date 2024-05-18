import express from 'express';
import bodyParser from 'body-parser';
import '@shopify/shopify-api/adapters/node';

require('dotenv').config();

const paymentRoutes = require('./routes/paymentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const shopifyRoutes = require('./routes/shopifyRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/payments', paymentRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/shopify', shopifyRoutes);

app.get('/api', (req, res) => {
    res.json('The Backend Server works! :)');
});

export default app;