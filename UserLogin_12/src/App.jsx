import React from 'react'
import Login from './Login'
import Profile from './Profile'
import Usercontextprovider from './context/Usercontextprovider'
function App() {
  return (
    <Usercontextprovider>
      <h1 className='text-white text-3xl font-bold text-center mx-3 my-5'>User Login</h1>
      <Login />
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
