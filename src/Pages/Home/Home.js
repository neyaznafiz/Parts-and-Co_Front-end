import React from 'react';
import Footer from '../../Components/Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLeter from './NewsLeter';
import OurInfo from './OurInfo';
import ProductsInHome from './parts-products/ProductsInHome';
import ReviewInHome from './Review/ReviewInHome';

const Home = () => {
    return (
        <div className='mt-[79px]'>
           <Banner></Banner>
           <ProductsInHome></ProductsInHome>
           <BusinessSummary></BusinessSummary>
           <OurInfo></OurInfo>
           <ReviewInHome></ReviewInHome>
           <NewsLeter></NewsLeter>
           <Footer></Footer>
        </div>
    );
};

export default Home;