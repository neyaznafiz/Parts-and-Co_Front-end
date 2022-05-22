import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
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
                            <Link to='/dashboard/myorders' className='font-semibold'>MY ORDERS</Link>
                            </li>
                        <li>
                        <Link to='/dashboard/addproduct' className='font-semibold'>ADD PRODUCT</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;