import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { fa-solid fa-cart-plus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  // console.log(props.product);
  // console.log(props);
  const {handleAddToCart, product} = props;
  const {img, name, price, ratings, seller} = product;

  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-main-info">
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
      </div>

      <div className="product-sub-info">
        <p><small>Manufacturer: {seller}</small></p>
        <p><small>Ratings: {ratings} star</small></p>
      </div>

      <button onClick={() => handleAddToCart(product)} className='btn-cart'>
      <small className='add-txt'>Add to Cart</small>
      <FontAwesomeIcon icon={faCartPlus} />
      
      
      </button>
      
      

    </div>
  );
};

export default Product;