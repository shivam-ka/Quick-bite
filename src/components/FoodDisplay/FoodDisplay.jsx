import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/assets'

const FoodDisplay = ({ category }) => {
  return (
    <div className='food-display'>
      <h2>Top Food chains in Your city</h2>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category == "ALL" || category === item.category) {
            return (<FoodItem key={index} id={item._id} name={item.name} price={item.price} des={item.description} rating={item.rating} img={item.image} />)
          }
        })}
      </div>

    </div>
  )
}

export default FoodDisplay