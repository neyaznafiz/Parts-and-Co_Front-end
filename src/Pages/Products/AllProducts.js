import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import PurchaseModal from '../Purchase/PurchaseModal';
import DisplayAllProducts from './DisplayAllProducts';

const AllProducts = () => {

   const [products]= useProducts()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10 bg-stone-400 '>
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