import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider' // Here, change to lowercase 'u'
const App = () => {
  return (
    <UserContextProvider> {/* Change to uppercase 'U' */}
    <div className='absolute top-23 left-[30%]'>
      <h1 className='text-4xl font-semibold text-center mt-20 mb-10'>Context API</h1>
      <div id='div' className='border-2 shadow-xl mt-3 p-5 flex items-center justify-center gap-5 flex-col w-[650px] rounded-lg '>
        <Login/>
        <Profile/>
      </div>
      </div>
    </UserContextProvider> 
  )
}

export default App;
