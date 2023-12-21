import express from 'express';
const router = express.Router();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

router.post('/intents', async (req, res) => {
    // create payment intent
    res.send(stripeSecretKey);
    // return the secret
});

module.exports = router;