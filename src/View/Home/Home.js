import React from 'react'
import Slider from '../Header/Slider'
import DefaultNav from '../Nav/Default'
import OfferTag from '../OfferLine'
import Collections from "../Collections/index"

const Home = () => {
  return (
    <div className='container-fluid'>
      <OfferTag/>
      <Slider/>
      <Collections/>
    </div>
  )
}

export default Home
