import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorpage from '../Asstes/Images/errorpage.png'
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {

    const Navigate = useNavigate()

    return (
        <div className='grid mx-auto items-center'>

            <div>
                <img className='' src={errorpage} alt="" />

                <button onClick={() => Navigate(-1)} className='w-full mt-5  border border-black px-3 py-2 rounded-md hover:bg-gray-300 hover:text-black'> 
                <span className='flex justify-center font-semibold'> <FaArrowLeft className='mt-1 mx-2'/> BACK </span>
                 </button>
            </div>

        </div>
    );
};

export default NotFound;