import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleItemRemove }) => {
  // console.log(product);
  const { img, name, price, quantity, shipping } = product;

  return (
    <div className='review-item'>
      <div className="image-container">
        <img className='image' src={img} alt="" />
      </div>
      <div className='details-container'>
        <div className="info-container">

          <h4 title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h4>
          {/* <h4>{name}</h4> */}
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Shipping Charge: {shipping}</p>

        </div>

        <div className='icon-container'>
          <button className='delete-btn' onClick={() => handleItemRemove(product)}>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>

  );
};

export default ReviewItem;