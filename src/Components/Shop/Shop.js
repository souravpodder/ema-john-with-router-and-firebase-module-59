import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    console.log('product started loading');
    fetch('products.json')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      console.log('product loaded fully');
    })
  },[])
  
  useEffect(()=>{
    console.log('local storage first line', products);
    const shoppingCart = getShoppingCart();
    const savedCart = [];
    for(const id in shoppingCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = shoppingCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        
      }
      
      
    }

    setCart(savedCart);
    // console.log(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;