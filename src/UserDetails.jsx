import React, { useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
    const [userId, setUserId] = useState('');
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState('');

    const fetchUserDetails = async () => {
        try {
            //add your URL of API Gateway of GetUser Lambda function
            //const response = await axios.get(`https://c1uznhy4u2.execute-api.ap-south-1.amazonaws.com/dev/getUser?userid=${userId}`); 
            const response = await axios.get(`https://9yoywh6519.execute-api.us-east-1.amazonaws.com/dev/getuser/?username=${userId}`); 
            
            if (response.data.user) {
                setUserDetails(response.data.user);
                setError('');
            } else {
                setUserDetails(null);
                setError('User not found');
            }
        } catch (err) {
            console.error('Error fetching user:', err);
            setError('Failed to get user details. Please check the User ID.');
        }
    };

    return (
        <div className="card">
            <h2 className="text-2xl font-bold mb-4">Get User Details</h2>
            <input 
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="border p-2 rounded mb-2"
            />
            <button 
                onClick={fetchUserDetails}
                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
                Get User
            </button>
            
            {error && (
                <p className="text-red-500 mt-2">{error}</p>
            )}

            {userDetails && (
                <div className="mt-4 border p-4 rounded bg-gray-100">
                    <h3 className="text-xl font-semibold">User Details:</h3>
                    <p><strong>User ID:</strong> {userDetails.username}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Date Joined:</strong> {userDetails.dateJoined}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
