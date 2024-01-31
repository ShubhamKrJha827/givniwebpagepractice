import React from 'react'


const NavItems = [
  {
    name: "Home",
    url: ""
  },
  {
    name: "About",
    url: ""
  },
  {
    name: "Services",
    url: ""
  },
  {
    name: "Project",
    url: ""
  },
  {
    name: "Product",
    url: ""
  },
  {
    name: "Career",
    url: ""
  },
]
const Sidebar = ({handleSidebar}) => {
  return (
    <div className='bg-black bg-opacity-30 h-full' onClick={handleSidebar}>
      <ul className='bg-white w-[80%] lg:w-full max-w-xs lg:max-w-none h-full space-y-2 lg:space-y-0 py-4 lg:py-0 text-gray-500 lg:flex items-center' onClick={(e) => e.stopPropagation()}>
        {NavItems.map((item, index) => (
            <li key={index} className='border-b-[1px] px-4 py-1 font-semibold  border-gray-500 lg:border-none'>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
