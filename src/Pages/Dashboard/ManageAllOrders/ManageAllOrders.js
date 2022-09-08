import React, { useEffect, useState } from 'react';
import DisplayManageOrder from './DisplayManageOrder';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://parts-and-co.onrender.com/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data))

    }, [])

    return (
        <div>
            <p className='text-2xl font-semibold py-5'> HERE IS ALL ORDERS INFORMATION</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
                {
                    allOrders.map(manageOrder => <DisplayManageOrder
                        key={manageOrder._id}
                        manageOrder={manageOrder}
                    ></DisplayManageOrder>)
                }
            </div>

        </div>
    );
};

export default ManageAllOrders;