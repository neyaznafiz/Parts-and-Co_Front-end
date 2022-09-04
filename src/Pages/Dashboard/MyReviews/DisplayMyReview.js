import React from 'react';
import { MdDoubleArrow } from 'react-icons/md';

const DisplayMyReview = ({ myreview }) => {

    const { review } = myreview

    return (
        <div>

            <span className='flex py-4'>
                <p className='pt- text-3xl'> <MdDoubleArrow /> </p>
                <p className='text-lg'>{review}</p>
            </span>

        </div>
    );
};

export default DisplayMyReview;