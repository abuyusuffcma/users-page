import React, { useState } from 'react';
import fakedata from '../../fakedata';
import './Users.css'
import Profiles from '../Profiles/Profiles';
import Friends from '../Friends/Friends';

const Users = () => {
    const first = fakedata; 
    const [users, setUsers] = useState(first);

    const [friend, setFriend] = useState([]);

    const handleAddProfile = (profile)=>{
        const newFriend = [...friend,profile];
        setFriend(newFriend);
    }

    
    return (
        <div className="user-container">
            <div className="profile-container">
               
                    {
                        users.map(user => <Profiles 
                            handleAddProfile = {handleAddProfile}
                            profile={user}>{user.name}</Profiles>)
                    }
                
            </div> 
            <div className="friend-container">
                <h3>This is Cart</h3>
                <Friends friend = {friend}></Friends>
            </div>
            
        </div>
    );
};

export default Users;