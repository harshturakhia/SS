import React from 'react'
import img1 from '../images/categories/men.webp'
import img2 from '../images/categories/women.jpeg'
import img3 from '../images/categories/kid.webp'
import CateCardSub from './CateCardSub'
export default function CateCard() {
  return (
    <>
      <div className="container py-3">
        <div className="row mb-3 pb-3">
          <div className="col-lg-12 col-md-12 col-sm-12 SmallCard SmallCatCard">
            <h4 className="m-0 mt-3 text-center">SHOP BY<span style={{ "font-weight": '400' }}> CATEGORIES </span></h4>
          </div>
        </div>
        <div className="row mb-5 cards">
          <CateCardSub img={img1} heading={'FOR MEN'} />
          <CateCardSub img={img2} heading={'FOR WOMEN'} />
          <CateCardSub img={img3} heading={'FOR KIDS'} />

        </div>
      </div>
    </>
  )
}
