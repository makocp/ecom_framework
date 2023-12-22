import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config(); // Load environment variables from .env file
const paymentRoutes = require('./routes/paymentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 4242;

app.use(bodyParser.json());
app.use('/payments', paymentRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes)

app.get('/api', (req, res) => {
    res.json('Testdata!');
});

app.post('/payment-sheet', async (req, res) => {
    
})



app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });