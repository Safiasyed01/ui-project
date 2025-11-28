import React from 'react'
import Sec1 from './components/sec1/sec1'
const App = () => {
  const users =[
    {
      img:'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmZlc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'satisfied',
    },
    {
      img:'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmZlc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'underserved',
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'underbanned',
    }
  ]
  return (
    <div>
      <Sec1 users={users}/>
    </div>
  )
}

export default App