import React from 'react'

export default function SmallCardSub({img,heading,items}) {
  return (
   <>
                <div className="col-lg-3 col-md-3 col-sm-3 Feacat">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 py-2">
                            <img src={img} alt="" className="img-fluid imgFeacat" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 m-auto">
                            <h5 className="headingFeaCat">{heading}</h5>
                            <span className="itemNoFeaCat">{items} Items</span>

                        </div>
                    </div>
                </div>
   </>
  )
}
