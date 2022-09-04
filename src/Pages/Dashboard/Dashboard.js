import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
        <div className='mt-[79px]'>
            <DashboardSidebar>
               <Outlet />
            </DashboardSidebar>
        </div>
    );
};

export default Dashboard;