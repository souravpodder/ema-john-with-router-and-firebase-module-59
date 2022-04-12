import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');


  const [user] = useAuthState(auth);
  const email = user?.email;


  const handleNameBlur = (event) => {
    setName(event.target.value);
  }



  const handleAddressBlur = event => {
    setAddress(event.target.value);
  }

  const handlePhoneBlur = event => {
    setPhone(event.target.value);
  }

  const handleShipment = event => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  }



  return (
    <div className='form-container'>
      <div>
        <h3 className='form-title'>Provide Shipping Info</h3>
        <form onSubmit={handleShipment}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="text" name="name" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input value={user?.email} readOnly type="text" name="email" id="" />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
          </div>


          <input className='form-submit' type="submit" value="Add Shipment" />
        </form>





      </div>
    </div>
  );
};

export default Shipment;