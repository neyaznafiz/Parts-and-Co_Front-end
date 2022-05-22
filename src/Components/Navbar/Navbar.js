// import React from 'react';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }


    return (

        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-300 px-10">
                    <Link to='/' class="flex-1 px-2 mx-2 font-semibold text-3xl hover:text-stone-800">Parts & Co.</Link>
                    
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn  btn-ghost shadow-none ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}

                            <li>
                                <Link to='/' className='rounded font-semibold hover:text-stone-800'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/dashboard' className='rounded font-semibold hover:text-stone-800'>DASHBOARD</Link>
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
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                                <Link to='/' className='rounded font-semibold hover:text-stone-800'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/dashboard' className='rounded font-semibold hover:text-stone-800'>DASHBOARD</Link>
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

        // <div className={`${open && ''} h-screen `}>



        //     <div className={`${open ? 'w-72' : 'w-16'} duration-300 h-full pt-16 px-2 bg-zinc-800 relative `}>

        //             <span className={`absolute cursor-pointer rounded-full text-3xl bg-zinc-800 text-yellow-600 -right-2 top-36 w-7 ${open && "rotate-180"}`} alt="" onClick={() => setOpen(!open)}> <MdOutlineDoubleArrow /> </span>

        //             <div className='flex gap-x-4 items-center'>
        //                 <img src="https://i.ibb.co/mFyBtvG/logo.png" alt="" className={` cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />

        //                 <h1 className={`font-serif text-yellow-600 origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Fashion Flavour</h1>
        //             </div>


        //             <nav className='pt-16'>


        //                 <Link to='/' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span className='flex items-center'> <FiHome className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>HOME</span> </span>
        //                 </Link>


        //                 {/* <Link to='/inventory' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                 <span className='flex items-center'> <MdOutlineInventory2 className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>INVENTORY</span> </span>
        //             </Link> */}

        //                 {/* <Link to='/manageinventory' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                 <span className='flex items-center'> <MdOutlineManageAccounts className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MANAGE INVENTORY</span> </span>
        //             </Link> */}

        //                 {/* {user ? <> */}
        //                 {/* <Link to='/myproducts' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span className='flex items-center'> <CgShoppingBag className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>MY PRODUCTS</span> </span>
        //                 </Link> */}

        //                 {/* <Link to='/addproduct' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span className='flex items-center'> <CgAddR className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ADD PRODUCT</span> </span>
        //                 </Link> */}

        //                 {/* </>
        //                 :
        //                 <></>
        //             } */}
        //                 {/* <Link to='/blog' className={`text-yellow-600 text-lg mt-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                 <span className='flex items-center'>  <BiNotepad className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>BLOG</span> </span>
        //             </Link> */}


        //                <Link to='/about' className={`text-yellow-600 text-lg mb-4 flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span className='flex items-center'> <FaBullseye className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>ABOUT</span> </span>
        //                 </Link>


        //                 {!user ?

        //                <Link to='/login' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span className='flex items-center'> <HiOutlineLogout className='text-2xl' /> <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOGIN</span> </span>
        //                 </Link>

        //                 :

        //                 <Link to='/' className={`text-yellow-600 text-lg  flex items-center gap-x-4 cursor-pointer p-2 hover:text-yellow-700`}>
        //                     <span  onClick={handleSignOut}  className='flex items-center'> <HiOutlineLogin className='text-2xl' />   <span className={`${!open && "hidden"} origin-left duration-300 pl-3`}>LOG OUT</span> </span>
        //                 </Link>
        //                 } 

        //                 {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">Theam</button> */}

        //             </nav>


        //     </div>

        // </div>


    );
};

export default Navbar;