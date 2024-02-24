import * as express from 'express';
import {CartProduct} from "../types/types";
import * as path from "path";
import * as fs from "fs";

const router = express.Router();

router.post('/create-order', (req, res) => {
    const cartProducts = req.body;
    const orderId = Date.now().toString();

    const order = mapCartProductsToOrderStructure(cartProducts, orderId);

    const ordersDir = path.join(__dirname, '..', 'orders');
    if (!fs.existsSync(ordersDir)) {
        fs.mkdirSync(ordersDir);
    }
    fs.writeFileSync(path.join(ordersDir, `${orderId}.json`), JSON.stringify(order, null, 2));

    res.send({orderId});
});

function mapCartProductsToOrderStructure(cartProducts: CartProduct[], orderId: string) {
    return {
        id: orderId,
        userId: 12, // Example, you need to get this from somewhere
        products: cartProducts, // Assuming CartProduct and Product are compatible
        amountTotal: 89990,
        shippingAddress: 'Some address', // Get this from the user
        isPaid: true,
        isDelivered: false,
    };
}

module.exports = router;
