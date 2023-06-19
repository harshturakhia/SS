import React from 'react'
import '../css/body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'

export default function CardsSub({img,review,heading,current,actual,subhead}) {
  return (
    <>
          <div className="col-lg-4 col-md-4 col-sm-4 trendingcard">
                   <div className="row fonts">
                       <div className="col-lg-12 col-md-12 col-sm-12 p-0 mb-3">
                           <img src={img} alt="" className="img-fluid" />
                       </div>
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="row mb-3">
                               <div className="col-lg-12 col-md-12 col-sm-12 mt-3 ">
                               <FontAwesomeIcon icon={faStar} />
                               <FontAwesomeIcon icon={faStar} />
                               <FontAwesomeIcon icon={faStar} />
                               <FontAwesomeIcon icon={faStar} />
                               <FontAwesomeIcon icon={faStar} />
                               <span className="review px-2">{review} reviews</span>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-lg-6 col-md-6 col-sm-6">
                                   <h5>{heading}</h5>
                               </div>
                               <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                                   ${current} <span style={{'opacity':'0.3','text-decoration': 'line-through'}}>${actual}</span>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-lg-12 col-md-12 col-sm-12">
                                   <p style={{'opacity':'0.6'}}>{subhead}</p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
    </>
  )
}
