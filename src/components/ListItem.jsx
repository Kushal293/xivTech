import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({title, description, image, topic, query}) => {
    return (
      <div className='mb-12'>
      <div className='grid md:flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between'>
          <div className='flex-1 flex flex-col gap-5 md:gap-10 items-center md:items-start text-center md:text-left mb-5 md:mb-0'>
              <h1 className='text-3xl md:text-6xl md:w-4/5 leading-tight'>{title}</h1>
                    <h3 className='text-lg md:text-2xl md:w-2/3'>{ description }</h3>
          </div>
          <div className='flex-1'>
              <img className='w-[470px] h-[420px] object-cover' src={image} alt="image" />
          </div>
            </div>
            <Link to={`services/${query}`}>
                <button className='flex items-center font-bold text-lg gap-5 px-1 hover:opacity-60 transition-all ease-in-out mt-3 md:mt-0 text-[#2272FB] md:text-black'>
                    {topic}
                    <img src="https://www.xivtech.io/Arrow-black.svg" alt="arrow" />
                </button>
            </Link>
      </div>
  )
}

export default ListItem