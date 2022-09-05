import React from 'react'
import Slider from '../Header/Slider'
import DefaultNav from '../Nav/Default'
import OfferTag from '../OfferLine'

const Home = () => {
  return (
    <div className='container-fluid'>
      <OfferTag/>
      <Slider/>
    </div>
  )
}

export default Home
