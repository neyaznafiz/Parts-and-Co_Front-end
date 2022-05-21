import React from 'react';
import { CgGoogle } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';

const SocialSignup = () => {
    return (
        <div>

            {/* google */}
            <button type="button" data-mdb-ripple-color="light" class="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <CgGoogle className='text-3xl'></CgGoogle>
            </button>

            {/* <!-- Facebook --> */}
            <button type="button" data-mdb-ripple-color="light" class="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <SiFacebook className='text-3xl'></SiFacebook>
            </button>

            {/* twitter */}
            <button type="button" data-mdb-ripple-color="light" class="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <IoLogoTwitter className='text-3xl'></IoLogoTwitter>
            </button>


        </div>
    );
};

export default SocialSignup;