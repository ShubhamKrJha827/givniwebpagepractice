import React from 'react'
import Container from '../Container';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import HostimgImg from "../../assets/img1.jpg"

const Hosting = () => {
    const ServicesItems = ["Mysql Databases", "Website Hosting", "File Storage", "File Backups", 
    "Remote Desktop", "Web Emails" ];
  return (
    <Container>
        <div className='max-w-md lg:max-w-none mx-auto lg:flex items-center '>
            <aside className='text-gray-600 space-y-1 max-w-md mx-auto lg:order-1 '>
                <h1 className='text-2xl md:text-3xl font-bold'>VPS Hosting Services</h1>
                <h4 className='text-xl md:text-2xl font-semibold pb-2'>your trusted IT solutions provider!</h4>
                <p className='font-medium text-sm md:text-base pb-4'>Our VPS hosting services are designed to meet the
                 growing demands of businesses seeking reliable and scalable hosting solutions. With cutting-edge
                  technology, robust infrastructure, and exceptional customer support, we provide the platform for
                   your online success.</p>
                 <div className='flex flex-wrap gap-2 justify-center'>
                 {ServicesItems.map((items) => (

                    <div key={items} className="flex text-gray-800 items-center gap-2 w-full md:w-[49%] font-medium bg-gray-200  border-0 py-2 px-2 focus:outline-none
                     hover:bg-gray-500
                    rounded text-sm md:text-lg"><span><IoMdCheckmarkCircleOutline/></span> {items}</div>
                 ))}
                 </div>
                     
            </aside>
            <aside className='py-7  max-w-md mr-auto lg:order-2'>
                <img src={HostimgImg} alt="Givni Hero image" 
                width="100%" className='max-w-md mx-auto' />
            </aside>
        </div>
    </Container>
  )
}

export default Hosting
