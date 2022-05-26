import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import DisplayProductsInHome from './DisplayProductsInHome';

const ProductsInHome = () => {

    const [products] = useProducts()

    return (

        <div className='bg-stone-500'>

            <div className='pt-10'>
                <p className='text-center text-4xl uppercase text-stone-800'>get here your needed parts</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pb-10 px-10 '>
                {
                    [...products].reverse().slice(0,3).map(product => <DisplayProductsInHome
                        key={product._id}
                        product={product}
                    />)
                }
            </div>

        </div>
    );
};

export default ProductsInHome;