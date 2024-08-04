import React, { useContext } from 'react'
import Usercontext from './context/Usercontext'
function Profile() {
  const {user} = useContext(Usercontext)
  if(!user) return <div className='max-w-md mx-auto p-2 bg-black rounded-lg shadow-md text-center my-5 text-rose-600 text-lg font-bold'>Please Login!! </div>
  return <div className='max-w-md mx-auto p-2 bg-black rounded-lg shadow-md text-center my-5 text-amber-300 text-lg font-bold'>Welcome {user.username}</div>
}

export default Profile
    