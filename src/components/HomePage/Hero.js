import '../css/body.css';
import '../css/responsive-style.css';

import React from 'react';
import bg from "../images/bg.png"
export default function Hero() {
  return (
    <>
        <div className="hero py-4">
            <div className="container">
                <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-6 heroType m-auto">
                    <p className="m-0 typed1">MAKE YOUR</p>
                    <p className="m-0 typed2">MOVE MORE </p>
                    <p className="m-0 typed3"> COMFORTABLE</p>
                    <a href="#" className="text-decoration-none moreItem"><span className="items">DISCOVER MORE</span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img className="img-fluid imgBg" src={bg} alt=""/>
                </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-4 w-25 flex-fill">
                            <div className="circle men">
                                <a href="#" className="btn text-decoration-none">MEN</a>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-4 w-25">
                            <div className="circle women">WOMEN</div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
