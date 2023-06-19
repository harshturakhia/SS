import React from 'react'

export default function CateCardSub({img,heading}) {
  return (
    <>
        
                <div className="col-lg-4 col-md-4 col-sm-4 trendingcard">
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                          <img src={img} alt="" className="img-fluid" />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                          <h4 className="text-center mt-2" style={{'font-family':'Raleway'}}>{heading}</h4>
                      </div>
                  </div>
                </div>
    
    </>
  )
}
