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
        res.status(500).json({error: 'Failed to get access scopes from Shopify'});
    }
});

module.exports = router;