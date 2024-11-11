import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const FoodItem = ({ id, name, price, des, rating, img }) => {

  const {
    cartItem,
    addToCart,
    removeFromCart,
  } = useContext(StoreContext);


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={img} alt="" />
      </div>

      <div className="food-item-info">
        <div className="food-item-rating">
          <p className='food-item-name'>{name}</p>

          <div className="customer-rating">
            <div className='star-img'>
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
              <img src={assets.star_icon} alt="" />
            </div>
            <p className='rating'>{`(${rating})`}  </p>
          </div>


        </div>
        <p className='food-item-desc'>{des}</p>
        <div className='foot-item-cart-add'>
          <p className='food-item-price'>₹ {price}</p>

          {!cartItem[id] ?
            <button className='add-button' onClick={() => addToCart(id)} >
              Add
            </button>
            :
            <div className='food-item-counter'>
              <div onClick={() => removeFromCart(id)}>-</div>
              <p> {cartItem[id]} </p>
              <div onClick={() => addToCart(id)}>+</div>
            </div>
          }

        </div>

      </div>
    </div>
  )
}

export default FoodItem