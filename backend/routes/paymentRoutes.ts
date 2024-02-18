import * as express from 'express';
const router = express.Router();

const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);


router.get('/stripe-key', (req, res) => {
    return res.status(200).send(stripePublishableKey);
});

router.post('/paymentIntent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'eur',
            automatic_payment_methods: {
                enabled: true,
            }
        });

        // // not necassery, only, for saving cards (returning customer).

        // const customer = await stripe.customers.create();
        // const ephemeralKey = await stripe.ephemeralKey.create(
        //     {customer: customer.id},
        //     {apiVersion: '2023-10-16'}
        // );

        res.json({
            clientSecret: paymentIntent.client_secret,
            // ephemeralKey: ephemeralKey.secret,
            // customer: customer.id
        });
    } catch (e: any) {
        res.status(400).json({
            error: e.message,
        });
    }

});

module.exports = router;