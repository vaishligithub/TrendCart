import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div>
      <h1>Welcome, {currentUser?.name}</h1>
     <p>You are logged in as {currentUser?.email}</p> 
    <Hero/>
    <Popular/>
    <Offer/>
    <NewCollections/>
    <NewsLetter/>
      {/* <h1>shop</h1> */}
    </div>
  )
}

export default Shop
