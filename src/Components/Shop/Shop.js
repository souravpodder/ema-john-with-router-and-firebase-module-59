import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
      </div>

      <div className="order-summary">
        <h3>order summery</h3>
        <p>Items Added: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;