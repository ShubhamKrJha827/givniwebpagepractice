import React from 'react'
import Container from '../Container';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Services = () => {
    const ServicesItems = ["Web Development", "Mobile App Development", "E-commerce Development", "Custom-Software Development", 
    "Digital amrketing", "User Interface(UI) Design", "Moble App Design", "Web Design" ];
  return (
    <Container>
        <div className='max-w-md lg:max-w-none mx-auto lg:flex items-center '>
            <aside className='text-gray-600 space-y-1 max-w-md mx-auto lg:order-2 '>
                <h1 className='text-2xl md:text-3xl font-bold'>Services - Design & Development</h1>
                <h4 className='text-xl md:text-2xl font-semibold pb-2'>your trusted IT solutions provider!</h4>
                <p className='font-medium text-sm md:text-base pb-4'>At Givni, we are passionate about turning your ideas
                 into stunning digital solutions that captivate your audience and drive tangible results. Our comprehensive design and
                  development services encompass the entire process, from concept and strategy to implementation and launch. With our
                   expertise, creativity,
                 and technical prowess, we bring your vision to life in the digital realm.</p>
                 <div className='flex flex-wrap gap-2 justify-center'>
                 {ServicesItems.map((items) => (

                    <div key={items} className="flex text-gray-800 items-center gap-2 w-full md:w-[49%] font-medium bg-gray-200  border-0 py-2 px-2 focus:outline-none
                     hover:bg-gray-500
                    rounded text-sm md:text-lg"><span><IoMdCheckmarkCircleOutline/></span> {items}</div>
                 ))}
                 </div>
                     
            </aside>
            <aside className='py-7  max-w-md ml-auto lg:order-1'>
                <img src={"https://givni.in/assets/img/services-left-image/main-pic.png"} alt="Givni Hero image" 
                width="100%" className='max-w-md mx-auto' />
            </aside>
        </div>
    </Container>
  )
}

export default Services
