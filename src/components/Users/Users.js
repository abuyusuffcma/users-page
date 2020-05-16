import React, { useState } from 'react';
import fakedata from '../../fakedata';
import './Users.css'
import Profiles from '../Profiles/Profiles';

const Users = () => {
    const first = fakedata; 
    const [users, setUsers] = useState(first)
    return (
        <div className="user-container">
            <div className="profile-container">
               
                    {
                        users.map(user => <Profiles profile={user}>{user.name}</Profiles>)
                    }
                
            </div> 
            <div className="cart-container">
                <h3>This is Cart</h3>
            </div>
            
        </div>
    );
};

export default Users;