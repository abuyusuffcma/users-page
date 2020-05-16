import React from 'react';
import './Profiles.css'

const Profiles = (props) => {
    
    const {name, phone, email, company, salary, website} = props.profile;
    return (
        <div className="profile">
            <div>
                <img src={props.profile.img} alt=""/>
            </div>
            <div className="user-info">
                <h3>Name : {name}</h3>
                <p>Phone : {phone}</p>
                <p>E-mail{email}</p>
                <p>Company : {company.name}</p>
                <h5>Yearly Salary : $ {salary}</h5>
                <button className="main-btn"> add to friend </button>
            </div>
            
        </div>
    );
};

export default Profiles;