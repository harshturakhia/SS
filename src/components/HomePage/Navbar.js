import React from 'react'
import '../css/header_footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBagShopping,faUser} from '@fortawesome/free-solid-svg-icons'

import logo from "../images/logo.jpg"
export default function Navbar() {
  return (
      <>
      <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center" style={{background: "#928E8B"}}>
               <p className="mb-1 mt-1">
               Unlock savings: explore exclusive coupon codes <span className="couponName">USE:BEST23</span>
               </p> 
            </div>
          </div>
          <div className="row justify-content-center align-items-center nav py-3">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                <a href="#" className="link-dark  text-decoration-none me-4">SHOP</a>
                <a href="#" className="link-secondary text-decoration-none">ABOUT</a>
            </div>
       
            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                <img className="img-fluid logo" src={logo} alt="" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-end">
                <a href="#">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3 iconBg"/>  
                </a> 
                <a href="#">
                <FontAwesomeIcon icon={faBagShopping} className="me-3 iconBg"/>
                </a>
                <a href="#">

                 <FontAwesomeIcon icon={faUser} className="me-3 iconBg"/>          
                </a>
             </div>
          </div>
      </div>
      </>
  )
}
