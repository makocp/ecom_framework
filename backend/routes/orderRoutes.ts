import * as express from 'express';
import {CartProduct} from "../types/types";
import * as path from "path";
import * as fs from "fs";
import {createOrder} from "../services/orderService";

const router = express.Router();

// router.post('/create-order', (req, res) => {
//     const cartProducts = req.body;
//     const order = createOrder(cartProducts);
//
//     const ordersDir = path.join(__dirname, '..', 'orders');
//     if (!fs.existsSync(ordersDir)) {
//         fs.mkdirSync(ordersDir);
//     }
//     fs.writeFileSync(path.join(ordersDir, `${orderId}.json`), JSON.stringify(order, null, 2));
//
//     res.send({orderId});
// });



module.exports = router;
