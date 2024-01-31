import React from 'react'
import Container from '../Container'

const Hero = () => {
  return (
    <Container>
        <div className='max-w-md lg:max-w-none mx-auto lg:flex items-center'>
            <aside className='text-gray-600 space-y-1 max-w-md mx-auto'>
                <h3 className='text-xl md:text-2xl font-medium'>Welcome to</h3>
                <h1 className='text-3xl md:text-5xl font-bold'>Givni IT Solutions,</h1>
                <h4 className='text-xl md:text-2xl font-semibold pb-2'>your trusted IT solutions provider!</h4>
                <p className='font-medium text-sm md:text-base pb-4'>At Givni - With our expertise, advanced technologies, 
                    and unwavering commitment to excellence, we empower organizations to
                     harness the power of technology and drive growth.</p>
                     <button className="block font-medium text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
                      rounded text-lg">CONTACT</button>
            </aside>
            <aside className='py-7  max-w-md mr-auto'>
                <img src={"https://givni.in/assets/img/banner-image/main-pic.png"} alt="Givni Hero image" 
                width="100%" className='max-w-md mx-auto' />
            </aside>
        </div>
    </Container>
  )
}

export default Hero
