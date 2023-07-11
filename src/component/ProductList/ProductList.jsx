import { useState } from 'react';
import products from '../../api/product.json';
import {  useSelector } from 'react-redux';
import './ProductList.css';
import CartButtons from './CartButtons';
const ProductList = () => {
    const {cartList} = useSelector((state) => state.cart)
    
   console.log(cartList);
    return (
        <section className="container">
            {products?.map((product, index) => (    
                <div className="product-container" key={index}>
                    <img src={product?.image} alt="" />
                    <h3>{product?.title}</h3>
                    <CartButtons product={product}/>
                    

                </div>
            ))}

        </section>
    )
}

export default ProductList;