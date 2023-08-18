import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../assets/slider/slide1-2048x478.jpg'
import slider2 from '../../assets/slider/slide2-2048x478.jpg'
import slider3 from '../../assets/slider/slide3-2048x478.jpg'
import slider4 from '../../assets/slider/e41194a705f507396f9a2152a6a0f623.webp'
import slider5 from '../../assets/slider/green-easter-car-with-eggs.jpg'
import slider6 from '../../assets/slider/sreekumar-p-L2p3pK7p5BY-unsplash.jpg'
import './Banner.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img className='h-56 md:h-96 lg:h-[500px] w-full relative' src={slider4} alt="" />
                        <div className='absolute top-0 w-full bg-black bg-opacity-20 h-56 md:h-96 lg:h-[500px]'>
                            <div className='ml-5 md:ml-20 mt-7 md:mt-20 italic font-serif'>
                                <h1 className='text-xl md:text-6xl text-white font-bold text-opacity-90'>Welcome to <br /> the <span className='text-primary'>Car Zone</span> <br /> Kid's Toys!"</h1>
                                <p className='text-xs md:text-2xl font-semibold text-white text-opacity-80 mt-5'> Step into a World of Joy and Excitement!</p>
                            </div>
                            <div className='hidden lg:block text-right mr-10 p-10 rounded-t-full rounded-s-full -mt-40 bg-pink-400 w-fit mx-auto'>
                                <h1 className='uppercase text-4xl text-white font-bold font-serif'>Upto 50% OFF</h1>
                                <div className='text-center'>
                                    <button className='btn rounded-full bg-white text-primary border-0 mt-5'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='h-56 md:h-96 lg:h-[500px] w-full relative' src={slider6} alt="" />
                        <div className='absolute top-0 w-full bg-black bg-opacity-40 h-56 md:h-96 lg:h-[500px]'>
                            <div className='ml-5 md:ml-20 mt-7 md:mt-20 italic font-mono'>
                                <h1 className='text-xl md:text-6xl text-white font-bold text-opacity-90'>Welcome to <br /> the <span className='text-primary'>Car Zone</span> <br /> Kid's Toys!"</h1>
                                <p className='text-sm md:text-2xl font-semibold text-white text-opacity-80 mt-5'> Step into a World of Joy and Excitement!</p>
                            </div>
                            <div className='hidden lg:block text-right mr-10  p-10 -mt-40 rounded-t-full rounded-s-full bg-pink-400 w-fit mx-auto'>
                                <h1 className='uppercase text-4xl text-white font-bold font-serif'>Upto 50% OFF</h1>
                                <div className='text-center'>
                                    <button className='btn rounded-full bg-white text-primary border-0 mt-5'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='h-56 md:h-96 lg:h-[500px] w-full relative' src={slider2} alt="" />
                        <div className='absolute top-0 w-full bg-black bg-opacity-60 h-56 md:h-96 lg:h-[500px]'>
                            <div className='ml-5 md:ml-20 mt-7 md:mt-20 italic font-serif'>
                                <h1 className='text-xl md:text-6xl text-white font-bold text-opacity-90'>Welcome to <br /> the <span className='text-primary'>Car Zone</span> <br /> Kid's Toys!"</h1>
                                <p className='text-sm md:text-2xl font-semibold text-white text-opacity-80 mt-5'> Step into a World of Joy and Excitement!</p>
                            </div>
                            <div className='hidden lg:block text-right mr-10 p-10 -mt-40 rounded-t-full rounded-s-full bg-pink-400 w-fit mx-auto'>
                                <h1 className='uppercase text-4xl text-white font-bold font-serif'>Upto 50% OFF</h1>
                                <div className='text-center'>
                                    <button className='btn rounded-full bg-white text-primary border-0 mt-5'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;