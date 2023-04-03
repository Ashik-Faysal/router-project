import React from 'react';
import "./Friend.css"
import { Link } from 'react-router-dom';
const Friend = ({ singleData }) => {
    const { name, email, phone, id } = singleData;
    return (
        <div className='single-data'>
            <h1>{name}</h1>
            <h2>email: {email}</h2>
            <h5>Phone: {phone}</h5>
            <p><Link to={`/friend/${id}`}>Show details</Link></p>
        </div>
    );
};

export default Friend;