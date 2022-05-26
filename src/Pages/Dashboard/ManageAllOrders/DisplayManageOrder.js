import React from 'react';

const DisplayManageOrder = ({ manageOrder }) => {

    const { email, name, orderQuantity, totalPrice, phoneNumber, address } = manageOrder

    return (
        <div >
            <div class="card bg-transparent shadow-2xl text-neutral-content">
                <div class="card-body items-center text-stone-600">

                    <div className='w-full mb-5'>
                        <div>
                            <p className='text-xl my-2 border-b font-semibold'>ORDERED PRODUCT INFORMATION</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold'>PRODUCT NAME : {name}</p>
                            <p className='font-semibold'>ORDER QUANTITY : {orderQuantity}</p>
                            <p className='font-semibold'>TOTAL PRICE : {totalPrice}</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div>
                            <p className='text-xl my-2 border-b font-semibold'>COUSTOMER INFORMATION</p>
                        </div>
                        <div className=''>
                        <p className='font-semibold'>COUSTOMER EMAIL : {email}</p>
                        <p className='font-semibold'>COUSTOMER PHONE : {phoneNumber}</p>
                        <p className='font-semibold'>COUSTOMER ADDRESS : {address}</p>
                        </div>
                    </div>

                 

                        {/* <div className='flex gap-x-5'>
                    <button onClick={()=> handleOrderCancle(_id)} className="btn btn-outline  mx-auto px-3 py-1 rounded-md hover:bg-transparent hover:text-black"> CANCEL </button>
                    {(totalPrice) && 
                        <Link to={`/dashboard/payment/${_id}`} className="btn btn-outline mx-auto px-7 py-1 rounded-md hover:bg-transparent hover:text-black"> PAY </Link>
                        }
                    {/* {(totalPrice && paid) &&
                        <span className='text-green-400'>PAID</span>
                        } */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        
    );
};

export default DisplayManageOrder;