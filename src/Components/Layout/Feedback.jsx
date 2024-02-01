import React from 'react'
import Container from '../Container'
import Slides from '../Utils/Slides'
import MemorySlides from './MemoySlides'
import FeedbackSlides from './FeedbackSlides'

const Feedback = () => {
  return (
    <Container>
        <div className="bg-emerald-200 rounded-md p-6">
    <div className='text-center space-y-2 max-w-lg mx-auto text-gray-700 py-4'>
       <h1 className='text-xl md:text-2xl font-bold'>Givni Clients Feedback</h1>
    </div>
    
    <div className='py-3'>
    <FeedbackSlides/>
    </div>
    <section className='my-4 max-w-xl mx-auto  border-dotted border-2 border-gray-400 rounded-lg py-8
     px-4 md:flex justify-between items-center '>
        <aside>
    <h1 className='text-xl md:text-2xl font-bold text-center text-gray-600'>
    Have any Feedback?</h1>
    <p className='font-medium text-center text-gray-600'>Don't hesitate to give us</p>
    </aside>
    <aside className='py-3'>
    <button className="block mx-auto font-medium text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
        rounded text-lg">FEEDBACK</button> 
    </aside>
    </section>
    </div>
    </Container>
  )
}

export default Feedback
