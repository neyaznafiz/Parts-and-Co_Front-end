import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashboardSidebar = ({ children }) => {

    const [user] = useAuthState(auth)

    const [admin] = useAdmin(user)

    return (
        <div className='bg-stone-400'>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li>
                            <Link to='/dashboard/myprofile' className='font-semibold hover:text-stone-600'>MY PROFILE</Link>
                        </li>

                        { !admin && user &&
                            <>
                                <li>
                                    <Link to='/dashboard/myorders' className='font-semibold hover:text-stone-600'>MY ORDERS</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/myreview' className='font-semibold hover:text-stone-600'>MY REVIEW</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/addareview' className='font-semibold hover:text-stone-600'>ADD A REVIEW</Link>
                                </li>
                            </>
                        }

                        {admin &&

                            <>
                                <li>
                                    <Link to='/dashboard/allusers' className='font-semibold hover:text-stone-600'>ALL USERS</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/addproduct' className='font-semibold hover:text-stone-600'>ADD PRODUCT</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/myaddeditems' className='font-semibold hover:text-stone-600'>MY ADDED PRODUCTS</Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/manageallorders' className='font-semibold hover:text-stone-600'>MANAGE ALL ORDERS</Link>
                                </li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;