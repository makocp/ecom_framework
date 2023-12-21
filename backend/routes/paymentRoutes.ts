import express from 'express';
const router = express.Router();
// TODO: import secret key from .env
const stripe = require('stripe')('sk_test_51OMlgSBrV6uzn4QWeAhgCyXGxiBM6u3CW63HMnpJmXghZeDX5ArIlmj2zuz6OiqEAQM2IGjl6LnOIbnrkHLaf70200uEXEV4tH');

router.post('/intents', async (req, res) => {
    // create payment intent

    // return the secret
});

module.exports = router;