import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading';
import auth from '../Firebase/firebase.init';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = () => {
    
    // const [user, loading] = useAuthState(auth);

    // const location =useLocation()

    // if(loading){
    //     return <Loading></Loading>
    // }

    // if(!user){
    //     return <Navigate to='/login' state={{from: location}}
    //     replace ></Navigate>
    // }

    const location = useLocation()

    const [admin] = useAdmin()

    if(!admin){
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
    }

    return <Outlet />
};

export default AdminRoute;