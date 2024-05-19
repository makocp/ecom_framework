import * as express from 'express';
import {createAdminRestApiClient} from '@shopify/admin-api-client';

const router = express.Router();

const storeDomain: string = 'https://quickstart-a5949da2.myshopify.com';
const apiVersion: string = '2024-04';
const accessToken: string = process.env.ACCESS_TOKEN ?? '';

const client = createAdminRestApiClient({
    storeDomain: storeDomain,
    apiVersion: apiVersion,
    accessToken: accessToken,
    formatPaths: false
})

router.get('/access-scopes', async (req, res) => {
    try {
        const response = await client.get(`/admin/oauth/access_scopes.json`);
        const body = await response.json();
        console.log(body);
        return res.status(200).send(body);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to get access scopes from Shopify'});
    }
});

router.get('/products', async (req, res) => {
    try {
        const response = await client.get(`/admin/api/2024-04/products.json`);
        const body = await response.json();
        return res.status(200).send(body);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to load products from Shopify'});
    }
});

router.post('/order', async (req, res) => {
    const order = req.body;

    if (!order) {
        return res.status(400).json({error: 'Order object is required'});
    }

    try {
        const response = await client.post(`/admin/api/2024-04/orders.json`, {
            data: {
                order
            }
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error('Error response from Shopify:', errorBody);
            return res.status(response.status).json({error: 'Failed to create order in Shopify', details: errorBody});
        }

        const body = await response.json();
        return res.status(201).send(body);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({error: 'Failed to create order in Shopify'});
    }
});

module.exports = router;