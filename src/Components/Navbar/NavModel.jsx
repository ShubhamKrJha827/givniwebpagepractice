import React from 'react'

const NavModelItem = ["Givni Group", "Enquiry", "LogIn"]
const NavModel = ({handleSidebar}) => {

  return (
    <div className='bg-blue-900 bg-opacity-30 py-6 lg:py-0' onClick={handleSidebar}>
      <ul className='bg-white w-[80%] lg:w-full mx-auto max-w-xs lg:max-w-none h-full space-y-2 lg:space-y-0 py-4 lg:py-0 px-2 text-gray-500 md:flex gap-2 items-center' onClick={(e) => e.stopPropagation()}>
        {NavModelItem.map((item) => (
                <li key={item} className='border-spacing border-thickness border-gray-500 border-dotted px-4 py-3 rounded-md font-semibold'>
                {item}
              </li>
        ))}
      </ul>
    </div>
  )
}

export default NavModel
