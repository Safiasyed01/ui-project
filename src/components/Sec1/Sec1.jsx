import React from 'react'
import Nav from './nav'
import Page1cont from './page1cont'
const Sec1 = (props) => {
  return (
    <div className='h-screen w-full bg-blue-200'>
        <Nav/>
        <Page1cont users={props.users }/>
</div>
  )
}

export default Sec1