import React from 'react'
import Container from '../Container'
import Slides from '../Utils/Slides'
import MemorySlides from './MemoySlides'

const Memories = () => {
  return (
    <Container>
    <div className='text-center space-y-2 max-w-lg mx-auto text-gray-700 py-4'>
       <h1 className='text-xl md:text-2xl font-bold'>The Memories From Our Blog</h1>
    </div>
    
    <div className='py-3'>
    <MemorySlides/>
    </div>
    </Container>
  )
}

export default Memories
