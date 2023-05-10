import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className='relative bg-black min-h-[400px] flex flex-col gap-10 md:flex-row items-center justify-between md:px-16 text-white pb-20 md:pb-5 px-4 '>
          <div className='flex flex-col items-center justify-center gap-3'>
              <Link to="/" >
                <div className='flex items-center px-6 md:px-20 pt-7 pb-4'>
                    <img className='h-16' src="https://www.xivtech.io./logo2.svg" alt="logo" />
                    <img className='h-16 w-40 -ml-5' src="https://www.xivtech.io./Text1.svg" alt="logo-text" />
                </div>
              </Link>
              <h3 className='text-white w-[250px] text-center'>
                  By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.
              </h3>
          </div>
          <div className='flex items-start gap-2 md:gap-20 md:px-36 text-center'>
              <div>
                  <h1 className='mb-2 md:mb-5 text-lg font-bold'>Locations</h1>
                  <ul className='list-none flex flex-col gap-1 md:gap-3'>
                      <li>Toronto</li>
                      <li>New Delhi</li>
                  </ul>
              </div>
              <div>
                  <h1 className='mb-2 md:mb-5 text-lg font-bold'>Services</h1>
                  <ul className='list-none flex flex-col gap-1 md:gap-3'>
                      <li>Complete AI + RPA Automation</li>
                      <li>Cloud Services</li>
                      <li>Delivery Pipeline Automation</li>
                      <li>Simplify Cloud Ops</li>
                      <li>Build Better Apps</li>
                  </ul>
              </div>
              <div>
                  <h1 className='mb-2 md:mb-5 text-lg font-bold'>XivTech</h1>
                  <ul className='list-none flex flex-col gap-1 md:gap-3'>
                      <li>About</li>
                      <li>Careers</li>
                      <li>Contacts</li>
                  </ul>
              </div>
          </div>
          <h3 className='absolute bottom-3 left-1/2 -translate-x-1/2 text-sm md:text-base w-[70%] md:w-fit'>© 2021 XivTech, Inc. All Rights Reserved</h3>
    </div>
  )
}

export default Footer