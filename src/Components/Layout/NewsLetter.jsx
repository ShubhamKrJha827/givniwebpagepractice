import React from 'react'
import Container from '../Container';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const NewsLetter = () => {
    const ServicesItems = ["Web Development", "Mobile App Development", "E-commerce Development", "Custom-Software Development", 
    "Digital amrketing", "User Interface(UI) Design", "Moble App Design", "Web Design" ];
  return (
    <Container>
        <div className='max-w-md lg:max-w-none mx-auto lg:flex items-center '>
            <aside className='text-gray-600 w-full lg:order-2 space-y-3 '>
                <h1 className='text-2xl md:text-3xl font-bold'>Newsletter</h1>
                <div className='flex'>
                <input type="text" name="newsletter" id="newletter" className=' py-3 bg-black text-gray-100
                 rounded-l-3xl block w-full px-8 text-sm font-medium' placeholder='Enter your business email here' />
                <button type="text" name="newsletter" id="newletter" className='py-2 bg-blue-500 text-gray-100
                 rounded-r-3xl block w-6/12 px-8 text-mg font-medium' placeholder='' >Subscribe</button>
                 </div>
                 <p className='text-gray-500 font-semibold'>Subscribe Our newsletter</p>
                     
            </aside>
            <aside className='py-7 w-full lg:order-1'>
                <img src={"https://givni.in/assets/img/free-trial-img.png"} alt="Givni Hero image" 
                width="100%" className='max-w-md mx-auto' />
            </aside>
        </div>
    </Container>
  )
}

export default NewsLetter
