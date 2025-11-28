// import React from 'react'

import Leftcintent from "./Leftcintent"

// const Lefttcard = () => {
//   return (
//     <div className='h-full w-49   rounded-4xl'>
//         <img src="https://plus.unsplash.com/premium_photo-1661777204046-d7fae72dbcdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmZlc2lvbmFsfGVufDB8fDB8fHww" alt="" srcset="">
//     </div>
//   )
// }

// export default Lefttcard
// import React from 'react'

// const Lefttcard = () => {
//   return (
//     <div className='h-100  w-48  overflow-hidden relative'>
//       <img
//         src="https://plus.unsplash.com/premium_photo-1661777204046-d7fae72dbcdd?w=500&auto=format&fit=crop&q=60"
//         alt=""
//         srcSet=""
//         className="h-full  w-full object-cover mt-8 ml-5"
//       />
//       <div className='absolute top-0 left-0 h-full w-full bg-amber-300'></div>
//       <h2>1</h2>
//       <div> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil deleniti quis sapiente? Eaque, ratione! </p></div>
//       <div>
//         <button>satisfied</button>
//         <button><i class="ri-arrow-right-line"></i></button>
//       </div>
//     </div>
//   )
// }

// import React from 'react'

// const Lefttcard = () => {
//   return (
//     <div className='h-110 w-50  overflow-hidden relative'>

//       <img
//         src="https://plus.unsplash.com/premium_photo-1661777204046-d7fae72dbcdd?w=500&auto=format&fit=crop&q=60"
//         alt=""
//         className="h-full w-full object-cover mt-8 ml-5"
//       />
//     <Leftcintent/>
//     <Leftcintent/>
//     <Leftcintent/>

//      </div>
//   )
// }

const Lefttcard = ({ users }) => {
  return (
    <div className="flex gap-7">

      {users.map((user, index) => (
        <div key={index} className="h-100 w-64 rounded-2xl overflow-hidden relative">

          <img
            src={user.img}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <Leftcintent user={user} index={index + 1}/>
        </div>
      ))}

    </div>
  )
}

export default Lefttcard


