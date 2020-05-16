import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Profiles.css'

const Profiles = (props) => {
    
    const {name, phone, email, company, salary, website,img} = props.profile;
    return (
        <div className="profile">
            <div>
                <img src={img} alt=""/>;  
            </div>
            <div className="user-info">
                <h3>Name : {name}</h3>
                <p>Phone : {phone}</p>
                <p>E-mail{email}</p>
                <p>Company : {company.name}</p>
                <p>Website : {website}</p>
                <h5>Yearly Salary : $ {salary}</h5>
                <button className="main-btn"> 
                
                <FontAwesomeIcon icon={faPlusCircle} />  add to friend </button>
            </div>
            
        </div>
    );
};

export default Profiles;