import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import DisplayProductsInHome from './DisplayProductsInHome';

const ProductsInHome = () => {

    const [products] = useProducts()

    return (

        <div className=''>

            <div className='pt-10'>
                <p className='text-center text-2xl lg:text-4xl uppercase '>get here your needed parts</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:pb-10 lg:px-10 '>
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