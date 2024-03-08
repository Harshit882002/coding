import React, { useContext, useState } from 'react';
import userContext from '../context/userContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };
    
    return (
        <div className='w-full p-5'>
            <h2 className='text-3xl font-semibold text-center mt-1 mb-5'>Log In</h2>
           <div className='flex flex-col'>
            <label className='w-full py-1' htmlFor="username">Username</label>
            <input 
                id='username'
                className='w-full border-2 py-1 px-2 border-1 rounded-md mb-3'
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                type="text" 
                placeholder='Enter Username' 
            />
            <label className='w-full py-1' htmlFor="password">Password</label>
            <input 
                id='password'
                className='w-full py-1 px-2 border-1'
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder='Enter Password' 
            />
            <button className='w-full py-1 px-2 border-black bg-[mediumvioletred] rounded-lg mt-10 text-white' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    );
};

export default Login;
