import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div id='download-app' className="download-app">
                <p>For better experience, download the QuickBite app now
                </p>
                <div>
                    <img src={assets.playStor_icon} alt="" />
                    <img src={assets.appstore_icon} alt="" />
                </div>

            </div>

            <div className="footer-content">

                <div className="footer-content-left">
                    <div>
                        <img src={assets.logo} alt="" />
                        <h2>Quic Bite</h2>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, doloribus? Aut corporis nihil iusto asperiores amet, quasi beatae rerum, maiores culpa minima nulla unde totam facilis consectetur tempore earum natus magnam necessitatibus harum distinctio excepturi.</p>
                </div>

                <div className="footer-content-center">

                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 98524678136</li>
                        <li>QuickBiteCare@gamil.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='footer-content-copyright'>
                Copyright 2024 © QuickBite.com All Right Reserved.
            </p>
        </div>
    )
}

export default Footer