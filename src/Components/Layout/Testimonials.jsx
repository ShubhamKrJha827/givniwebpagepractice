import React from 'react'
import Container from '../Container'
import TestimonialSlider from './TestimonialSlides'

const Testimonials = () => {
  return (
    <Container>
      <div className='bg-slate-100 p-4 rounded-sm'>
         <div className='text-center space-y-2 max-w-lg mx-auto text-gray-700 py-4'>
       <h1 className='text-xl md:text-2xl font-bold'>Proud Projects That Make Us Stand Out</h1>
                <p className='font-medium text-sm md:text-base pb-4'>We take immense pride in the
                 projects we've undertaken and successfully delivered. Our track record showcases
                  our expertise, innovation, and commitment to excellence. Here are a few standout
                   projects that demonstrate our capabilities and the impact we've made for our
                    clients:

</p>
    </div>
    <TestimonialSlider/>
    </div>
    </Container>
  )
}

export default Testimonials
