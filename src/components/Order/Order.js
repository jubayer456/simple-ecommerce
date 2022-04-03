import React from 'react';
import useCarts from '../../utilities/useCarts';
import useProducts from '../../utilities/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [carts, setCarts] = useCarts(products);
    return (
        <div className='shop-container'>
            <div className="order-review-container">
                {
                    carts.map(product => <ProductDetails
                        key={product.id}
                        product={product}
                    ></ProductDetails>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carts}
                // clearBtn={clearBtn}
                >
                </Cart>
            </div>

        </div >
    );
};

export default Order;