import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import PurchaseModal from '../Purchase/PurchaseModal';
import DisplayAllProducts from './DisplayAllProducts';

const AllProducts = () => {

   const [products]= useProducts()

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 p-3 lg:p-10 mt-[90px]'>
            {
                products.map(product => <DisplayAllProducts
                    key={product._id}
                    product={product}
                />)
            }

            
        </div>
    );
};

export default AllProducts;