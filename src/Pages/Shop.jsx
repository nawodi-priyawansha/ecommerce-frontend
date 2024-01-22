import React from 'react'
import Hero from '../Components/Hero/Hero'
import Populer from '../Components/Populer/Populer'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewsLetter from '../Components/Navbar/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Populer/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
