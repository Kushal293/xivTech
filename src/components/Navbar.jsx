import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='flex items-center justify-between border-b-2 bg-white border-gray-300 shadow-md sticky top-0 right-0 left-0 z-50'>
          <Link to="/" >
            <div className='flex items-center px-6 md:px-20 pt-7 pb-4'>
                <img className='h-16' src="https://www.xivtech.io./logo.svg" alt="logo" />
                <img className='h-16 w-40 -ml-5' src="https://www.xivtech.io./Text.svg" alt="logo-text" />
            </div>
          </Link>
          <div className='hidden md:flex items-center pt-7 pb-4 md:px-16 text-lg gap-2 md:gap-14'>
              <ul className='list-none flex items-center gap-2 md:gap-5'>
                  <li className='flex items-center justify-center'>
                      Services
              <svg className='h-5 w-5 svg-inline--fa fa-angle-down fa-w-10' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                  </li>
                  <li>Careers</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>
                      <svg className='h-7 w-7 svg-inline--fa fa-search fa-w-16 searchbar-icon2' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                  </li>
              </ul>
              <button className='border-2 border-[#2272FB] text-[#2272FB] font-semibold px-7 py-2 rounded-lg hover:bg-[#2272FB] hover:text-white transition-all ease-in-out'>Let's Talk</button>
          </div>
          <div className='px-7 md:hidden'>
              <svg className="h-8 w-10 cursor-pointer svg-inline--fa fa-bars fa-w-14 faicon fa-2x m-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          </div>
    </div>
  )
}

export default Navbar