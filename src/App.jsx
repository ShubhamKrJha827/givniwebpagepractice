import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Container from './Components/Container'
import Hero from './Components/Layout/Hero'
import Services from './Components/Layout/Services'
import Hosting from './Components/Layout/Hosting'
import Expectations from './Components/Layout/Expectations'
import Pricing from './Components/Layout/Pricing'
// import Slides from './Components/Utils/Slides'
import Footer from './Components/Footer'

function App() {
  

  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Container>
      <div className='mt-28 space-y-3'>
      <Hero/>
      <div className='border-b-[0.1px] border-gray-500'></div>
      <Services/>
      <div className='border-b-[0.1px] border-gray-500'></div>
      <Hosting/>
      <div className='border-b-[0.1px] border-gray-500'></div>
      <Expectations/>
      <div className='border-b-[0.1px] border-gray-500'></div>
      <Pricing/>
      <div className='border-b-[0.1px] border-gray-500'></div>
      <Footer/>
      </div>
      </Container>
   </div>
  )
}

export default App
