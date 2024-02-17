import React, { useState } from 'react'

const App = () => {
  const [coler, setColer] = useState("olive")
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: coler}}>
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"red"}} 
            onClick={() => setColer("red")}>Red</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"green"}}
             onClick={() => setColer("green")}
            >Green</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"blue"}}
             onClick={() => setColer("blue")}
            >Blue</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#fde047"}}
            onClick={() => setColer("yellow")}
            >Yellow</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#191970"}}
            onClick={() => setColer("#191970")}
            >Midnight Blue</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#FFC0CB"}}
            onClick={() => setColer("#FFC0CB")}
            >Pink</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#800080"}}
            onClick={() => setColer("#800080")}
            >Purple</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#000080"}}
            onClick={() => setColer("#000080")}
            >Navy</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#20B2AA"}}
            onClick={() => setColer("#20B2AA")}
            >Light Sea Green</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#FA8072"}}
            onClick={() => setColer("#FA8072")}
            >Salmon</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#6B8E23"}}
            onClick={() => setColer("#6B8E23")}
            >Olive Drab</button>

            <button className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor:"#FF1493"}}
            onClick={() => setColer("#FF1493")}
            >Deep Pink</button>


          </div>
         </div>
      </div>
    </>
    
  )
}

export default App
