import {useEffect, useState} from 'react';
import {ICartProduct} from "../types/types";

type useCartCalculationsProps = {
    cartProductData: ICartProduct[]
}
const useCartCalculations = ({cartProductData}: useCartCalculationsProps) => {
    const [subtotal, setSubtotal] = useState(0);
    // const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const newSubtotal = cartProductData.reduce((accumulated, current) => accumulated + current.product.price * current.quantity, 0);
        // const newShipping = cartProductData.reduce((accumulated, current) => accumulated + current.product.shippingCost, 0);
        // const newTotal = newSubtotal + newShipping;
        const newTotal = newSubtotal;

        setSubtotal(newSubtotal);
        // setShipping(newShipping);
        setTotal(newTotal);

    }, [cartProductData]);

    // return {subtotal, shipping, total};
    return {subtotal, total};
};

export default useCartCalculations;