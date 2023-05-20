import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategory from './ShopByCategory';
import LatestToys from './LatestToys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
                <LatestToys></LatestToys>
            </div>
        </div>
    );
};

export default Home;