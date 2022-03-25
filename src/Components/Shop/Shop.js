import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    // console.log('product started loading');
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  
  useEffect(()=>{
    let storedCart = getShoppingCart();
    // console.log(storedCart);
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        let quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
    // console.log(savedCart);
  },[products])

  const handleAddToCart = (selectedProduct) => {

    const exists = cart.find(product => product.id === selectedProduct.id);
    let newCart;
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }else{
      selectedProduct.quantity = selectedProduct.quantity + 1;
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      newCart = [...rest, selectedProduct];
    }

    
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    addToDb(selectedProduct.id);
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