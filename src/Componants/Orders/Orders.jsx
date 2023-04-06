import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    return (
        <div className='shop-container'>
            <div>
                <h2>This is orders Page:{products.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;