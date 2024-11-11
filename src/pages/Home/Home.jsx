import React, { useState } from 'react'
import './Home.css'
import Menu from '../../components/menu/Menu'
import { assets } from '../../assets/assets'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  const [category, setCategory] = useState("ALL")
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='poster-container'>
          <img src={assets.poster_one} alt="" />
        </div>
        <Menu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>
    </>
  )
}

export default Home