import React, { useContext } from 'react';
import userContext from '../context/userContext';

const Profile = () => {
    const {user} = useContext(userContext);
    
    if (!user) return <div>Please login</div>

    return <div className='text-lg'>Welcome {user.username}</div>;
};

export default Profile;
