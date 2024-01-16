import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

const paymentRoutes = require('./routes/paymentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/payments', paymentRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

app.get('/api', (req, res) => {
    res.json('The CI/CD WORKS! just a test.!');
});

export default app;