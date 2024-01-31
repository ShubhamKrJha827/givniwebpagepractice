import React from 'react'
import Container from '../Container'
import Slides from '../Utils/Slides'

const Pricing = () => {
  return (
    <Container>
    <div className='text-center space-y-2 max-w-lg mx-auto text-gray-700'>
       <h1 className='text-xl md:text-2xl font-bold'>Our Pricing Plan</h1>
                <p className='font-medium text-sm md:text-base pb-4'>Our VPS hosting services are designed to meet the
                 growing demands of businesses seeking reliable and scalable hosting solutions. With cutting-edge
                  technology, robust infrastructure, and exceptional customer support, we provide the platform for
                   your online success.</p>
    </div>
    <div className='flex justify-center'>
    <button className="block font-medium text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
                      rounded-tl-md rounded-bl-md text-xs md:text-lg">Monthly Plan</button>
    <button className="block font-medium text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
                      rounded-tr-md rounded-br-md text-xs md:text-lg">Yearly Plan</button>
    </div>
    <div className='py-3'>
    <Slides/>
    </div>
    </Container>
  )
}

export default Pricing
