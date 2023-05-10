import React from 'react'
import ListItem from './ListItem';
import { items } from '../utils/constant';

const Main = () => {
  return (
      <div className='px-3 md:px-[274px] py-7'>
          <h1 className='text-2xl font-bold mb-10 md:mb-20'>Let's Collaborate</h1>
          {
              items.map(item => {
                  return <ListItem key={item.id} {...item} />
              })
          }
    </div>
  )
}

export default Main