import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>This is FriendDetails compo</h1>
            <h2>Name: {friend.name}</h2>
            <p>phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;