import React from 'react';
import { CgGoogle } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';
import auth from '../../Firebase/firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Shared/Loading';
import useToken from '../../Hooks/useToken';


const SocialSignup = () => {

    const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    // const [signInWithTwitter, twitterUser, twitterLoading, twitterError] = useSignInWithTwitter(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const [token] = useToken(GoogleUser || facebookUser )

    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || '/'

    if(googleError || facebookError ){
        toast.error(<>{googleError?.message}, {facebookError?.message}</>)
    }

    if(googleLoading || facebookLoading ){
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true })

        toast.success('Congratulation ! You are Loged In successfully. Enjoy our more feature of our website.')
    }

    return (
        <div>

            {/* google */}
            <button onClick={() => signInWithGoogle()} type="button" data-mdb-ripple-color="light" className="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <CgGoogle className='text-3xl'></CgGoogle>
            </button>

            {/* <!-- Facebook --> */}
            <button onClick={() => signInWithFacebook()} type="button" data-mdb-ripple-color="light" className="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <SiFacebook className='text-3xl'></SiFacebook>
            </button>

            {/* twitter */}
            {/* <button onClick={() => signInWithTwitter()} type="button" data-mdb-ripple-color="light" className="p-2 text-white rounded-full hover:bg-black hover:shadow-lg focus:outline-none focus:ring-0 active:bg-white transition duration-150 ease-in-out mx-2 border">
                <IoLogoTwitter className='text-3xl'></IoLogoTwitter>
            </button> */}


        </div>
    );
};

export default SocialSignup;