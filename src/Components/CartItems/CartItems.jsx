import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/Context';
import removeIcon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className='cartitems-format cartitems-format-main' key={e.id}>
              <img src={e.image} alt='' className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className='cartitems-quantity'>{cartItem[e.id]}</button>
              <p>${e.new_price * cartItem[e.id]}</p>
              <img 
                src={removeIcon} 
                onClick={() => removeFromCart(e.id)} 
                alt='Remove item'
                className='remove-icon'
              />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
      <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
           <p>Shipping Fee</p>
           <p>Free</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'>
              <h1>Total</h1>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className='cartitems-promocode'>
        <p>If you have a promo code ,Enter it here</p>
        <div className='cartitems-promobox'>
         <input type='text' placeholder='promo-code'/>
         <button>Submit</button>
        </div>
      </div>

      </div>
    </div>
  );
}

export default CartItems;

