import express from 'express';
require('dotenv').config(); // Load environment variables from .env file

const app = express();

const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

app.get('/stripe-key', (req, res) => {
    return res.send(stripePublishableKey);
});

app.get('/api', (req, res) => {
    res.json('Testdata!');
});




app.listen(4242, () => { console.log("Server started on port 4242"); });