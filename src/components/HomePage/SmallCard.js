import '../css/body.css'
import men1 from "../images/feturedCat/36ca72c6-e3f3-449a-afe5-c870da55a946.webp"
import men2 from "../images/feturedCat/b7fd9018-e0ce-4adc-9320-a05b67eef078.webp"
import men3 from "../images/feturedCat/pexels-photo-2787249.webp"
import men4 from "../images/feturedCat/pexels-photo-267202.jpeg"
import women1 from "../images/feturedCat/pexels-photo-1598508.webp"
import women2 from "../images/feturedCat/heels.webp"
import women3 from "../images/feturedCat/flats.jpeg"
import women4 from "../images/feturedCat/boots.jpeg"
import kid1 from "../images/feturedCat/kids.jpg"
import kid2 from "../images/feturedCat/girlkid.jpg"
import kid3 from "../images/feturedCat/flipflopkid.jpg"
import kid4 from "../images/feturedCat/sliponkids.jpg"
import React from 'react'
import SmallCardSub from './SmallCardSub'

export default function SmallCard() {
  return (
    <>
        <div className="container py-3">
            <div className="row mb-3 pb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 SmallCard">
                <h4 className="m-0 mt-3 text-center">OUR <span style={{"font-weight":'400'}}>FEATURED CATEGORIES </span></h4>
                </div>
            </div>
            <div className="row mb-3 cards">
                <div className="col-lg-6 col-md-6 col-sm-6">
                <a href="#" className="text-decoration-none moreItem"><span className="items">MEN's</span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                <a href="#" className="moreItem"><span className="items">all categories</span></a>
                </div>
            </div>
            <div className="row mb-3 cards">
               <SmallCardSub  img={men1} heading={"Running"} items={"24"}/>
               <SmallCardSub  img={men2} heading={"Training"} items={"120"}/>
               <SmallCardSub  img={men3} heading={"Tennis"} items={"54"}/>
               <SmallCardSub  img={men4} heading={"Hiking & Outdoor"} items={"50"}/>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-sm-6">
                <a href="#" className="text-decoration-none moreItem"><span className="items">WOMEN's</span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                <a href="#" className="moreItem"><span className="items">all categories</span></a>
                </div>
            </div>
            <div className="row mb-3 cards">
               <SmallCardSub  img={women1} heading={"Sneakers"} items={"24"}/>
               <SmallCardSub  img={women2} heading={"Heels"} items={"24"}/>
               <SmallCardSub  img={women3} heading={"Flats"} items={"24"}/>
               <SmallCardSub  img={women4} heading={"Boots"} items={"24"}/>
            </div>
            <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-sm-6">
                <a href="#" className="text-decoration-none moreItem"><span className="items">KID's</span></a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                <a href="#" className="moreItem"><span className="items">all categories</span></a>
                </div>
            </div>
            <div className="row mb-3 cards ">
               <SmallCardSub  img={kid1} heading={"School Shoe"} items={"20"}/>
               <SmallCardSub  img={kid2} heading={"Mary Janes"} items={"50"}/>
               <SmallCardSub  img={kid3} heading={"Fip-Flops"} items={"30"}/>
               <SmallCardSub  img={kid4} heading={"Slip-Ons"} items={"20"}/>
            </div>
        </div>
    </>
  )
}
