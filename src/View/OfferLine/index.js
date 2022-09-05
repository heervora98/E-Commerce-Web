import React from 'react'
import { Link } from 'react-router-dom'

const OfferTag = () => {
  return (
    <div className='bg-dark'>
        <div className="row">
            <div className="col-12 text-center align-items-center py-2 text-white">
                <p className='m-0' style={{letterSpacing:"2px"}}>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <Link to={''} className="text-decoration-none fw-normal">SHOP NOW</Link></p>
            </div>
        </div>
    </div>
  )
}

export default OfferTag
