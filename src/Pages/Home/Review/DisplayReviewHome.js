import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

const DisplayReviewHome = ({ homeReview }) => {

    const { email, review } = homeReview

    return (
        <div className='my-5'>
            <p className='text-lg font-semibold pl-2'>E-mail : {email}</p>
            <span className='flex py-2'>
                <p className='pt- text-3xl'> <MdDoubleArrow /> </p>
                <p className='text-lg'>{review}</p>
            </span>

        </div>
    );
};

export default DisplayReviewHome;