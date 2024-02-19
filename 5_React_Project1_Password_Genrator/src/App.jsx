import React, { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (noAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_=-+[]{}~`?<>/|';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Corrected the random number generation
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, noAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99); 
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, noAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 bg-gray-800'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
           onClick={copyPassword}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 bg-gray-800'>
          <div className='flex items-center gap-x-1 bg-gray-800'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(parseInt(e.target.value))}} // Added parseInt to convert string to number
            />
            <label className='bg-gray-800'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-2 bg-gray-800'>
            <input
              type="checkbox"
              checked={noAllowed} // Changed to checked instead of defaultChecked
              id='numberinput'
              className=''
              onChange={() => {
                setNoAllowed((prev) => !prev);
              }}
            />
            <label className='bg-gray-800' htmlFor='numberinput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1 bg-gray-800'>
            <input
              type="checkbox"
              checked={charAllowed} // Changed to checked instead of defaultChecked
              id='characterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className='bg-gray-800' htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
