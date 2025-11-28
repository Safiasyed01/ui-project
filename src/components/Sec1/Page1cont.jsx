import React from 'react'
import Left from './left'
import Right from './right'
const page1cont = ({users}) => {
  return (
    <div className='py-11 flex items-center justify-between h-[90vh] px-18'>
      <Right/>
        <Left users={users}/>
    </div>
  )
}

export default page1cont