import '../css/body.css';
import '../css/responsive-style.css';
import car1 from "../images/carousels/pexels-photo-1598505.jpeg"
import car2 from "../images/carousels/pexels-photo-4464820.jpeg"
import car3 from "../images/carousels/pexels-photo-2731977.jpeg"
import React from 'react'

export default function Carousel() {
  return (
    <>
       <div
        id="carouselExampleCaptions"
        className="carousel slide mt-4 py-3"
        data-bs-ride="carousel"
    >
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="carousel-img img-fluid d-block w-100" alt="..." />
      <div className=" carousel-caption d-none d-md-block innerTextCar ">
          <h5>STRIDE YOUR STYLE</h5>
          <p>Discover Our Footwear Collection.</p>  
      </div>
    </div>
    <div className="carousel-item">
      <img src={car2} className="carousel-img  img-fluid d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block innerTextCar">
          <h5>STRIDE YOUR STYLE</h5>
          <p>Discover Our Footwear Collection.</p> 
      </div>
    </div>
    <div className="carousel-item">
      <img src={car3} className="carousel-img img-fluid d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block innerTextCar">
          <h5>STRIDE YOUR STYLE</h5>
          <p>Discover Our Footwear Collection.</p> 
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </>
  )
}
