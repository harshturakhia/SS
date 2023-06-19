import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CaroImgSub({icon,text,subText}) {
  return (
    <>
                <div className="col-lg-3 col-md-3 col-sm-3 text-center rightLine">
                    <div className="row mb-3">
                        <div className="col-lg-12 colmd-12 col-sm-12">
                        <FontAwesomeIcon icon={icon} style={{'font-size':'4rem','opacity':'0.9'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 colmd-12 col-sm-12 fonts">{text}</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 colmd-12 col-sm-12 fonts" style={{'color':'lightgray'}}>
                        {subText}
                        </div>
                    </div>
                </div>
    </>
  )
}
