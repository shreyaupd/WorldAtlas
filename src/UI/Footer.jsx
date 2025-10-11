import React from 'react'
import footerApi from '../api/FooterApi'
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router';

const Footer = () => {
  const footerIcons={
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>
  }
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerApi.map((item,index)=>{
          const {icon, title, details} = item
          return(
            <div className="footer-contact" key={index}>
              <div className='icon'>
                {footerIcons[icon]}
                 {/* Dynamically render the icon based on the string value using [] */}
                <div className='footer-contact-text'>
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
        <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved  
                <span className='!text-blue-400 ml-3'>
                   Shreya Upadhyay
              </span>
              </p>
            </div>
      <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.instagram.com/shreyaupd27/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/shreyaupd/WorldAtlas"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer