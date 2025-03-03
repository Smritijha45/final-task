import { useState } from 'react'
import './App.css'
import Headwala from './components/Headwala'
import Body from './components/Body'
import Body2 from './components/Body2'
import extra from './components/extra'
import Adv from './components/Adv'
import Blogs from './components/Blogs'
import Offer from './components/Offer'
import Footer from './components/Footer'
import HotelCard from './components/HotelCard'

function App() {
  
  return (
    <>
 <Headwala/>
  <Body/>
  <Body2/>
  <extra/>
  <Adv/>
  <Blogs/>
  <HotelCard/>
  <Offer/>
  <Footer/>
    </>
  )
}

export default App
