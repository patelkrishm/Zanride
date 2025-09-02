import React from 'react'
import playstore from './Images/playstore.png'
import appstore from './Images/appstore.png'
import Logo1 from './Images/Logo.png'
import { useNavigate } from 'react-router-dom'
import Become_a_Driver from './Become_a_Driver'
 import Blog from './Blog'
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Contect_Us from './Contect_Us'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-1">
                    <div className="footer-1-1">
                        <div className="footer-1-a">
                            <h1>Download our App</h1>
                            <p>Available for android and iso</p>
                        </div>
                        <div className="footer-1-b">
                            <p>Download Zenride mobile app to experience effortless traveling</p>
                            <a href="https://play.google.com"><button className='play'> <img src={playstore} alt="" /><p>Play Store</p></button></a>
                            <a href="https://www.apple.com"><button  className='play'><img src={appstore} alt="" /><p> App Store</p></button></a>
                        </div>
                    </div>
                    <div className="footer-1-2">
                        <ul>
                        
                            <li>Become a Driver</li><br />
                            <li>Blogs</li><br />
                            <li>Contect Us</li>
                        </ul>
                    </div>
                    <div className="footer-1-3">
                        <ul>
                            <a href="https://www.instagram.com"><li>Instagram</li></a><br />
                            <a href="https://www.facebook.com"><li>Facebook</li></a><br />
                            <a href="https://in.linkedin.com"><li>Linkedin</li></a><br />
                            <a href="https://www.x.com"><li>Twitter</li></a>
                        </ul>
                    </div>

                </div>
                <div className="footer-1-4">
                    <span> <button>Terms</button>
                        <button>Privacy</button></span>
                    <p>©2024 zenride</p>
                    <img src={Logo1} alt="" style={{}}/>
                </div>
            </div>
        </>
    )
}

export default Footer