import express from 'express';
const router = express.Router();

const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);


router.get('/stripe-key', (req, res) => {
    return res.send(stripePublishableKey);
});

router.post('/intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            }
        });

        res.json({
            paymentIntent: paymentIntent.client_secret
        });
    } catch (e: any) {
        res.status(400).json({
            error: e.message,
        });
    }

});

module.exports = router;