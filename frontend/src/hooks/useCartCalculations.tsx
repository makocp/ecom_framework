import {useEffect, useState} from 'react';
import {CartProduct} from "../data/products";

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

    const transformCentsToEuroString = (cents: number) => {
        return (cents / 100).toFixed(2)
    };

    return {subtotal, shipping, total, transformCentsToEuroString};
};

export default useCartCalculations;