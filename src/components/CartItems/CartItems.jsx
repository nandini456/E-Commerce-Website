import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitemsformat-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                        <div className="cartitems-format cartitemsformat-main">
                <img src={e.image} className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs : {e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>Rs : {e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} />
            </div>
            <hr />
            </div>
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>Rs : {getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>Rs : {getTotalAmount()}</h3>
                        </div>
                        <button>Proceed To Check Out</button>
                    </div>
                    <div className="promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default CartItems