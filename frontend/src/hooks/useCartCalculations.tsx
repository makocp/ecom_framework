import {useEffect, useState} from 'react';
import {CartProduct} from "../types/types";

type useCartCalculationsProps = {
    cartProductData: CartProduct[]
}
const useCartCalculations = ({cartProductData}: useCartCalculationsProps) => {
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const newSubtotal = cartProductData.reduce((accumulated, current) => accumulated + current.product.price * current.quantity, 0);
        const newShipping = cartProductData.reduce((accumulated, current) => accumulated + current.product.shippingCost, 0);
        const newTotal = newSubtotal + newShipping;

        setSubtotal(newSubtotal);
        setShipping(newShipping);
        setTotal(newTotal);

    }, [cartProductData]);

    return {subtotal, shipping, total};
};

export default useCartCalculations;