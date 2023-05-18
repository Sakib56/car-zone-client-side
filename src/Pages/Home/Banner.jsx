import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div>
                <img className='w-full h-full md:h-[500px]' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;