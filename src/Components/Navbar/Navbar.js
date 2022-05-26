// import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)

    const [admin] = useAdmin()
    const { pathname } = useLocation()

    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }


    return (

        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300 px-10">

                    {/* dashboard drawer button */}
                    {pathname.includes('dashboard') && (

                        //   dashboard drawer 
                        <label htmlFor="dashboard-drawer" tabIndex="0" className="btn btn-ghost shadow-none lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    )}

                    <Link to='/' className="flex-1 px-2 mx-2 font-semibold text-3xl hover:text-stone-800">Parts & Co.</Link>


                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn  btn-ghost shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block ">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}

                            <li>
                                <Link to='/' className='rounded font-semibold hover:text-stone-800'>HOME</Link>
                            </li>

                            <li>
                                <Link to='/allproducts' className='rounded font-semibold hover:text-stone-800'>ALL PRODUCTS</Link>
                            </li>

                            <li>
                                <Link to='/purchase' className='rounded font-semibold hover:text-stone-800'>PURCHASE</Link>
                            </li>

                            <li>
                                <Link to='/dashboard/myprofile' className='rounded font-semibold hover:text-stone-800'>DASHBOARD</Link>
                            </li>

                            <li>
                                <Link to='/blog' className='rounded font-semibold hover:text-stone-800'>BLOG</Link>
                            </li>
                            <li>
                                <Link to='/about' className='rounded font-semibold hover:text-stone-800'>ABOUT</Link>
                            </li>
                            <li>
                                <Link to='/myportfolio' className='rounded font-semibold hover:text-stone-800'>MY PORTFOLIO</Link>
                            </li>

                            <li>
                                {!user ?

                                    <Link to='/login' className='cursor-pointer p-2'>
                                        <span className='flex items-center font-semibold rounded hover:text-stone-800'> LOGIN </span>
                                    </Link>
                                    :
                                    <div className="dropdown dropdown-end">

                                        <div tabIndex="0" className=" pb-1 shadow-none rounded-full">

                                            {user?.photoURL &&
                                                <img className="w-9 rounded-full" src={user?.photoURL} alt='I' />
                                            }
                                            {!user?.photoURL &&
                                                <h1 className="text-2xl font-bold border-2 rounded-full px-3 border-black">{user?.displayName?.slice(0, 1)}</h1>
                                            }


                                        </div>

                                        <ul tabIndex="0" className="dropdown-content menu p-2 border-2 border-stone-600 rounded-box mt-52">

                                            <p className='text-center font-serif font-semibold'> {user?.displayName}</p>
                                            <p className='text-center my-2 font-semibold'> {user?.email}</p>

                                            <Link to='/' className='cursor-pointer p-2 my-2'>
                                                <span onClick={handleSignOut} className='flex items-center justify-center font-semibold outline rounded hover:text-stone-800'> LOG OUT</span>
                                            </Link>

                                        </ul>
                                    </div>

                                }
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}


                    {/* {user?.photoURL ?
                        <img className="w-14 mx-auto rounded-full" src={user.photoURL} alt='I' /> : <h1 className="text-2xl mx-auto font-bold border-2 border-black">{user.displayName.slice(0, 1)}</h1>
                    } */}


                    <li>
                        <Link to='/' className='rounded font-semibold hover:text-stone-800'>HOME</Link>
                    </li>

                    <li>
                        <Link to='/allproducts' className='rounded font-semibold hover:text-stone-800'>ALL PRODUCTS</Link>
                    </li>

                    <li>
                        <Link to='/purchase' className='rounded font-semibold hover:text-stone-800'>PURCHASE</Link>
                    </li>

                    <li>
                        <Link to='/dashboard' className='rounded font-semibold hover:text-stone-800'>DASHBOARD</Link>
                    </li>

                    <li>
                        <Link to='/blog' className='rounded font-semibold hover:text-stone-800'>BLOG</Link>
                    </li>

                    <li>
                        <Link to='/about' className='rounded font-semibold hover:text-stone-800'>ABOUT</Link>
                    </li>

                    <li>
                        <Link to='/myportfolio' className='rounded font-semibold hover:text-stone-800'>MY PORTFOLIO</Link>
                    </li>

                    <li>
                        {!user ?

                            <Link to='/login' className='cursor-pointer p-2'>
                                <span className='flex items-center font-semibold rounded hover:text-stone-800'> LOGIN </span>
                            </Link>
                            :
                            <Link to='/' className='cursor-pointer p-2'>
                                <span onClick={handleSignOut} className='flex items-center font-semibold rounded hover:text-stone-800'> LOG OUT</span>
                            </Link>
                        }
                    </li>

                </ul>

            </div>

        </div>

    );
};

export default Navbar;