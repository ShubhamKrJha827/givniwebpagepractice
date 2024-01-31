import React from 'react'
import Container from '../Container'

const Expectations = () => {
    const ExpectationsItems = [
        {
            item1: "180+",
            item2: "Intern Trained"
        },
        {
            item1: "150+",
            item2: "Feedback"
        },
        {
            item1: "32+",
            item2: "Developers"
        },
        {
            item1: "180+",
            item2: "Clients"
        },
    ]
  return (
   <Container>
     <h1 className='text-xl md:text-2xl font-bold text-center pb-4 text-gray-600'>We Always Try To Understand <br className='hidden md:block' />
      Users Expectation</h1>
      <div className='flex flex-wrap  justify-between'>
        {ExpectationsItems.map((items, index) => (
            <aside key={index} className='grid py-4 justify-center w-[48%] md:w-auto mx-auto'>
                <div className='text-2xl font-bold text-indigo-600 text-center'>{items.item1}</div>
                <div className='font-medium text-center text-gray-600'>{items.item2}</div>
            </aside>
        ))}
      </div>
    <section className='my-4 max-w-xl mx-auto  border-dotted border-2 border-gray-400 rounded-lg py-8
     px-4 md:flex justify-between items-center '>
        <aside>
    <h1 className='text-xl md:text-2xl font-bold text-center text-gray-600'>
    Have any question about us?</h1>
    <p className='font-medium text-center text-gray-600'>Don't hesitate to contact us</p>
    </aside>
    <aside className='py-3'>
    <button className="block mx-auto font-medium text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
        rounded text-lg">CONTACT US</button> 
    </aside>
    </section>
    </Container>
  )
}

export default Expectations
