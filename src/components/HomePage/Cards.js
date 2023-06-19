import '/Ongoing Projects/HumanWear/client/src/styles/body.css'
import '/Ongoing Projects/HumanWear/client/src/styles/header_footer.css'
import '/Ongoing Projects/HumanWear/client/src/styles/responsive-style.css'
import React from 'react'

import CardsSub from './CardsSub.js'


import img1 from "../images/trending/8df8cd93-9616-4c93-9323-d51f76825278.webp"
import img2 from "../images/trending/b8165104-b53d-4876-9154-f126165174f8.webp"
import img3 from "../images/trending/b4f34969-b968-47ac-aca8-d0b780ad8b2f.webp"
import img4 from "../images/trending/f8dfa191-60b3-44c1-b730-b25e0a908c35.webp"
import img5 from "../images/trending/jd_193634_a.jpg"
import img6 from "../images/trending/fc6eb3a7-31eb-475d-a1c0-4dc036c37ed0.webp"


export default function Cards() {
  return (
    <>
      <div className="container py-3">
        <div className="row mb-3 pb-3">
          <div className="col-lg-12 col-md-12 col-sm-12 SmallCard CardTrend">
            <h4 className="m-0 mt-3 text-center"><span>MOST TRENDING</span> PRODUCTS </h4>
          </div>
        </div>
        <div className="row mb-3 cards">
          <CardsSub img={img1} review={"20"} heading={"Nike"} current={"70"} actual={"90"} subhead={"Legend Essential 2 Training Sports Shoes"} />
          <CardsSub img={img2} review={"50"} heading={"Puma"} current={"120"} actual={"150"} subhead={"Punch Comfort Brand Logo-Printed Sneakers"} />
          <CardsSub img={img3} review={"10"} heading={"Nike"} current={"100"} actual={"110"} subhead={"LeBron Witness 7 EP Basketball Shoes"} />
        </div>
        <div className="row mb-3 cards">
          <CardsSub img={img4} review={"40"} heading={"Nike"} current={"80"} actual={"90"} subhead={"Air Force 1 '07 LV8 Sneakers"} />
          <CardsSub img={img5} review={"70"} heading={"Vans"} current={"100"} actual={"150"} subhead={"Unisex Yellow Sneakers"} />
          <CardsSub img={img6} review={"100"} heading={"Nike"} current={"90"} actual={"110"} subhead={"Jordan Stay Loyal 2 Running Shoes"} />
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 col-sm-12 col-md-12 text-center">
            <span><a href="#" style={{ 'color': 'black', 'font-family': 'Raleway' }}>view all products</a></span>
          </div>
        </div>
      </div>
    </>
  )
}
