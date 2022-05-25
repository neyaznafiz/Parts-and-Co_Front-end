import React from 'react';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import DisplayMyReview from './DisplayMyReview';
const axios = require('axios');

const MyReview = () => {

    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const myAddedItems = async () => {
            const email = user.email;

            try {
                const { data } = await axios.get(`http://localhost:5000/myaddedreview?email=${email}`, {
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
        myAddedItems();

    }, [user])


    return (
        <div>

            <div class=" border rounded-lg bg-transparent mx-4 mt-20 lg:w-[900px]">
                    <p className='py-2 pl-3 text-lg font-semibold'>{user.email}</p>
                <div class=" px-4 py-8 border-t">

                    <div>
                        {
                            reviews.map(myreview => <DisplayMyReview
                                key={myreview._id}
                                myreview={myreview}
                            ></DisplayMyReview>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;