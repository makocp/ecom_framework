import * as express from 'express';
import {IOrder} from "../types/types";
import * as path from "path";
import * as fs from "fs";

const router = express.Router();

// todo: endpoint to send order
router.post('/create-order', (req, res) => {
    const orderData: IOrder = req.body;

    const ordersDir = path.join(__dirname, '..', 'orders');
    if (!fs.existsSync(ordersDir)) {
        fs.mkdirSync(ordersDir);
    }

    const filePath = path.join(ordersDir, `${orderData.orderId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(orderData, null, 2));

    res.json({ orderId: orderData.orderId });
});


module.exports = router;
