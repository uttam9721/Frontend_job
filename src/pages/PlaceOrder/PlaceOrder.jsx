import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className='title'>
          Delivery Information 
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text"  placeholder='Last Name'/>
        </div>
          <input type="text"  placeholder='Email address'/>
          <input type="text"  placeholder='Street'/>
          <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text"  placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="number" placeholder='pincode' />
          <input type="text"  placeholder='Country'/>
        </div>
        <input type="text" placeholder='phone Number' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>₹ {getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>₹ {getTotalCartAmount()===0?"0":50}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total</b>
        <b>₹ {getTotalCartAmount()===0?"0":getTotalCartAmount()+30}</b>
      </div>
    </div>
    <button>PROCEED TO PAY</button>
  </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
