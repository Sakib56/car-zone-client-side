import React, { useEffect } from 'react';
import img1 from '../../assets/gallery/toy-g-1.jpg'
import img2 from '../../assets/gallery/toy-g-2.jpg'
import img3 from '../../assets/gallery/toy-g-3.jpg'
import img4 from '../../assets/gallery/toy-g-4.jpg'
import img5 from '../../assets/gallery/toy-g-5.jpg'
import img6 from '../../assets/gallery/toy-g-6.jpg'
import img7 from '../../assets/gallery/toy-g-7.jpg'
import img8 from '../../assets/gallery/toy-g-8.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div className='mt-8 md:mt-20 overflow-hidden'>
            <h1 className='text-center mb-5 md:mb-12 font-extrabold text-lg md:text-4xl text-pink-700 italic font-serif rounded-full bg-pink-200 w-fit p-2 mx-auto'>Our Toys Gallery</h1>
            <>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[FreeMode, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img1} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img2} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img3} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img4} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img5} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img6} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img7} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-pink-200 p-2 md:p-5 hover:bg-pink-300'>
                            <img className='w-36 rounded-xl opacity-90 h-32 md:w-72 md:h-52' src={img8} alt="" />

                            <p className='text-base md:text-xl mt-2 text-pink-600 font-bold italic'>Remote Car</p>
                            <p className='text-xs md:text-lg mt-2 text-pink-600 font-bold italic'>Price: $50</p>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </>

        </div>
    );
};

export default Gallery;