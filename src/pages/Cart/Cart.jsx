import React, { useContext } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets'

const Cart = () => {

  const {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext);

  return (
    <div className='cart'>

      <div className="cart-nav">
        <Link to={'/'}>
          <img className='back-icon' src={assets.left_arrow_icon} alt="" />
        </Link>
        <h1>QuickBiTe</h1>
      </div>

      <div className="cart-item">
        <div className="cart-item-details">
          <p className='food-name'>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            {
              console.log(item);
            }
            return (<>
              <div key={item._id} className='added-items'>
                <p className='food-img'> <img src={item.image} alt="" /></p>

                <p>{item.name}</p>
                <p>₹ {item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{cartItem[item._id] * item.price}</p>
                <p onClick={() => removeFromCart(item._id)} > <img className='delete-icon' src={assets.remove_icon} alt="" /> </p>

              </div>
              <hr />
            </>
            )
          }
        })}
      </div>
      <div className="cart-bottom">

      {getTotalCartAmount() === 0 ? "" 
      : 
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{`₹ ${getTotalCartAmount()}`}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>{`₹ 35`}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <p>{`₹ ${getTotalCartAmount() + 35}`}</p>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div> }

      </div>
    </div>
  )
}

export default Cart