import { useEffect, useState } from "react";
import { getProduct } from "./fakeDb";

const useCarts = (products) => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const exist = getProduct();
        let newCart = [];
        for (const id in exist) {
            const stored = products.find(product => product.id === id);
            if (stored) {
                stored.quantity = exist[id];
                newCart.push(stored);
            }
        }
        setCarts(newCart);
    }, [products]);
    return [carts, setCarts];
};

export default useCarts;