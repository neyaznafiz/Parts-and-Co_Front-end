import React from 'react';
import Footer from '../../Components/Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLeter from './NewsLeter';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BusinessSummary></BusinessSummary>
           <NewsLeter></NewsLeter>
           <Footer></Footer>
        </div>
    );
};

export default Home;