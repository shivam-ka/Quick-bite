import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({ category, setCategory }) => {
  return (
    <>
      <div className='menu' id='menu'>
        <h1>What's on your mind?</h1>
        <p className='slogan'>Explore a world of flavors and recipes, where every dish tells a story. Join us on a delicious culinary adventure! </p>
        <div className="menu-list">
          {menu_list.map((item, index) => (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} key={index} className="menu-list-item">
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Menu