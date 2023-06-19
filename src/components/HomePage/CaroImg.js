import React from 'react'
import '../css/body.css'
import CaroImgSub from './CaroImgSub.js'

import { faBox, faTruckFast, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function CaroImg() {
    return (
        <>
            <div className="container-fluid features">
                <div className="row py-5 mb-5">
                    <CaroImgSub icon={faBox} text={"Free Shipping"} subText={"Free Shipping on order above $65"} />
                    <CaroImgSub icon={faTruckFast} text={"Free Returns"} subText={"30-days free return policy"} />
                    <CaroImgSub icon={faCreditCard} text={"Secure Payments"} subText={"We accepts all major credit cards"} />
                    <CaroImgSub icon={faCheck} text={"Customer Service"} subText={"Top notch 24/7 customer service"} />
                </div>
            </div>
            <div className="container-fluid newsletter text-center mb-3 py-4">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                        <h4 className="colorw" style={{ 'font-size': '1rem' }}>KEEP UPDATED</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className="colorw" style={{ 'letter-spacing': '0.2em' }}>NEWSLETTER</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="colorw">Enter your email to stay in the loop on new collections, pop-up shows and more.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-9 w-50">

                                <input type="text" className="form-control mail" placeholder="Enter your email" />
                            </div>
                            <div className="col-lg-3">
                                <a className="btn mailBtn">SUBSCRIBE</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
