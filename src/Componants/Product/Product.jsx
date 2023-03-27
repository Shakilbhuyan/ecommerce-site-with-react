import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
           <p>Price : ${price}</p>
           <p>Manufacturar :{seller}</p>
           <p>Ratings :{ratings} star</p>
           </div>
           <button className='btn-add-cart'>Add TO Cart</button>
        </div>
    );
};

export default Product;