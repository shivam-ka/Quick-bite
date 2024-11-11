import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = () => {
    const [active, setActive] = useState("home")

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={assets.logo} alt="" />
                <h1>Quick BiTe</h1>
            </div>

            <div className="nav-menu">
                <ul>
                    <Link to={'/'} > <li className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</li> </Link>
                    <a href="#menu"> <li className={active === "menu" ? "active" : ""} onClick={() => setActive("menu")}>Menu</li></a>
                    <li> <img src={assets.search_icon} alt="" /> <p>Search</p> </li>
                    <a href="#footer">  <li className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About Us</li></a>
                    <a href="#download-app"><li className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact</li></a>
                </ul>
            </div>

            <div className="nav-cart">
                <Link to={'/cart'}>
                    <div className='nav-cart-img'>
                        <img src={assets.cart_icon} alt="" />
                        {getTotalCartAmount() === 0 ? "" : <div className='dot'></div>}

                    </div>
                </Link>
                <button>Sing In</button>
            </div>

        </div>
    )
}

export default Navbar