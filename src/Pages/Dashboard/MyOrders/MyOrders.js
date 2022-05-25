import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import DisplayMyOrders from './DisplayMyOrders';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setReviews] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

    const myaddedOrders = async () => {
        const email = user.email;

        try {
            const { data } = await axios.get(`http://localhost:5000/myaddedorders?email=${email}`, {
                headers: {
                    authorization: ` Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setReviews(data);
        }
        catch (error) {
            console.log(error.message);
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login')
            }
        }
    }
    myaddedOrders();

}, [user])


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5' >
           {
               orders.map(order => <DisplayMyOrders
               key={orders._id}
               order={order}
               ></DisplayMyOrders>)
           }
        </div>
    );
};

export default MyOrders;