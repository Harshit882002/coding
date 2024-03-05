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
        <div>
            <h2>Log In</h2>
            <input 
                
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                type="text" 
                placeholder='Enter Username' 
            />
            <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder='Enter Password' 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;
