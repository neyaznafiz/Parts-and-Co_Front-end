import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { BiEdit } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {

    // const [user] = useAuthState(auth)
    // console.log(user)
    // const { displayName, email } = user

    // const navigate = useNavigate()
    // const navigateToPurchase = id => {
    //     navigate(`/purchase/${_id}`)
    // }


    return (
        <div className=' w-full h-full  px-5 py-10 '>

            <div className=" rounded-lg border-2 border-stone-500 ">

                <div className='flex justify-between'>

                    <p className='pl-4 py-3 text-xl font-semibold'> MY PROFILE</p>
                    <Link to='/editprofile' className='flex text-xl font-semibold pr-4 py-3'> <BiEdit className='mt-[6px] font-semibold' /> EDIT</Link>
                </div>

                <div className="grid justify-center px-4 py-10 border-t border-stone-500">

                    <div className='text-center border-b border-stone-500 lg:px-32'>

                        <div className='pr-44'>
                            <div className="avatar pt-52">
                                <div className="w-44 mask mask-hexagon">
                                    <img src="https://api.lorem.space/image/face?hash=55350" alt='' />
                                </div>
                            </div>

                        </div>
{/* 
                        <p className='text-lg font-semibold py-2'> NAME : {displayName} </p>
                        <p className='text-lg font-semibold py-2'> EMAIL : {email} </p> */}
                    </div>

                </div>

                <div className=''>

                    <div className='flex justify-around py-10'>

                        <div>
                            <p className='text-xl font-semibold'> PHONE </p>
                            <p className='text-lg font-semibold border-t-2 border-stone-500 pt-1'> 01303246616 </p>
                        </div>

                        <div>
                            <p className='text-xl font-semibold '>CITY</p>
                            <p className='text-lg font-semibold border-t-2 border-stone-500 pt-1'> Dhaka, Bangladesh </p>
                        </div>

                    </div>


                    <div className='grid lg:flex justify-around gap-y-5 py-10'>

                        <div>
                            <p className='text-xl font-semibold uppercase'>Degree Title</p>
                            <p className='text-lg font-semibold border-t-2 border-stone-500 pt-1'>Diploma in Computer Science</p>
                        </div>

                        <div>
                            <p className='text-xl font-semibold uppercase'>Institution Name </p>
                            <p className='text-lg font-semibold border-t-2 border-stone-500 pt-1 '>Shyamoli Ideal Polytechnic Institute</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;