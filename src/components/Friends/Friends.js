import React from 'react';
import './Friends.css'

const Friends = (props) => {
    const friend = props.friend;

    let total= 0;
    for(let i=0; i<friend.length; i++){
        const profile = friend[i];
        total = total + profile.salary;
    }

    return (
        <div>
            <h3>Total Friends Added : {friend.length}</h3>
    <h4>Total Yearly Salary of Friends : {total}</h4>
        </div>
    );
};

export default Friends;