import React from 'react'

const SingleService = ({topic, title, bgImage, discription, info, details, capabilities}) => {
  return (
      <div>
          <div className='pb-5 max-w-screen overflow-hidden'>
              <h3 className='px-7 pt-5 text-gray-500'>{ topic }</h3>
          </div>
          <div className={ `bg-${bgImage} bg-cover min-h-[485px] w-screen md:w-full relative bg-center bg-fixed z-40` }>
              <div className='absolute left-1/2 -translate-x-1/2 md:-translate-x-1/2 top-16 text-white text-center w-11/12 md:w-10/12'>
                  <h1 className='text-3xl md:text-[3.50rem] font-thin mb-5 leading-tight'>{ title}</h1>
                  <h4>{ discription }</h4>
              </div>
          </div>
          <div className='py-10 flex flex-col gap-14'>
              <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 font-bold text-3xl text-center'>
                  <span>{ info[0] }</span>
                <span className='border-y-[3px] md:border-y-0 md:border-x-[3px] border-[#6709e2] px-10 py-5 md:px-10 md:py-1'>{ info[1] }</span>
                <span>{ info[2] }</span>
              </div>
              <p className='px-2 md:px-36 text-center text-lg text-gray-600'>
                  { details }
              </p>
              <div className='flex items-center justify-center'>
                  <button className='bg-black text-white px-10 py-4 hover:bg-white hover:text-black border-2 border-black transition-all ease-in-out'>Get in touch</button>
              </div>
          </div>
          <div className='px-5 md:px-36 py-10 mt-16'>
              <h1 className='text-4xl'>Capabilities</h1>
              <div className='flex flex-col md:flex-row items-center py-8 gap-10'>
                  {
                      capabilities.map((capability, index) => {
                          return (
                              <div className='border w-72' key={index}>
                                  <div className='w-full'>
                                      <img className='object-cover' src={capability?.image} alt="capabality" />
                                  </div>
                                  <h3 className='p-6'>{ capability?.desc }</h3>
                              </div>
                          );
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default SingleService