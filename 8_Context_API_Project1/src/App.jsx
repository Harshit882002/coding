import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider' // Here, change to lowercase 'u'
const App = () => {
  return (
    <UserContextProvider> {/* Change to uppercase 'U' */}
      <div id='div'>
        <h1 className='text-2xl font-semibold'>Context API</h1>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider> 
  )
}

export default App;
