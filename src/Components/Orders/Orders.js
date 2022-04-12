import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(products);

  let navigate = useNavigate();

  const handleItemRemove = (product) => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  }

  return (
    <div>
      <div className="shop-container">
        <div className="review-container">

          {
            cart.map(product => <ReviewItem handleItemRemove={handleItemRemove} id={product.id} product={product}></ReviewItem>)
          }

        </div>

        <div className="order-summary">
          <Cart cart={cart}>

            <button onClick={() => navigate('/shipment')}>Proceed Shipping</button>


          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;