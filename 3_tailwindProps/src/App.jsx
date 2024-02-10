import React, { useState } from 'react'
import Card from './components/card'

const App = () => {
   const[count, setcount] = useState(0)
  return (
    <>
    <div className='flex flex-col items-center gap-5'>
      <h1 className='text-red-700 font-semibold text-2xl p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Captain" btnText="click me" />
      <Card username="Harshit" />
    
      </div>
    </>
  )
}

export default App
