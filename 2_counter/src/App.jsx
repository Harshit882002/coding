import React, { useState } from 'react'

const App = () => {

  let [counter, setCounter] = useState(10);
  // let countr = 5;

    const addVal = () => {

      if(counter < 100){

          counter = counter + 1;
       // console.log("Add", counter );
          setCounter(counter)
          
      }
      
    }


    const removeVal = () => {

      if(counter > 0){

          counter = counter - 1;
          // console.log("Remove", counter);
          setCounter(counter)

      }
     
    }

  return (
    <div id='main'>
      <h1>Captain</h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addVal} id='btn1'>Add Value</button>
      <button onClick={removeVal} id='btn2'>Remove Value</button>
    </div>
  )
}

export default App
