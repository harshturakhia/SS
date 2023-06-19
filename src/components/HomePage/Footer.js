import '../css/body.css'
import '../css/header_footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitterSquare,faTruckFast,faCreditCard,faCheck} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import logo from "../images/logo.jpg"
export default function Footer() {
  return (
    <>
        <div className="container-fluid footer py-3">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>Copyright © Stepsquad</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>© 2021 A Company Building trust through exceptional products and service.All rights reserved.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <FontAwesomeIcon icon={faTwitterSquare} /> */}
                             </div>
                                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="row mb-5">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <h3>PRODUCTS</h3>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>MEN</a>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>WOMEN</a>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                            <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>KIDS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="row mb-5">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <h3>ABOUT</h3>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>SHIPPINH & RETURNS</a>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>CONTACT US</a>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                <div className="row mb-5">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <h3>POLICIES</h3>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>PRIVACY POLICY</a>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                <a href="" className="text-decoration-none fonts" style={{'color':'black'}}>TERMS & CONDITIONS</a>
                                </div>
                            </div>
                        
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}
