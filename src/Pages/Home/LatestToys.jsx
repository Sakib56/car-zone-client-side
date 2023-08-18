import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const LatestToys = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            easing: 'ease-in-out',
            once: true
        });
    }, []);
    return (
        <div className='mt-10 md:mt-28'>
            <h1 className='text-center mb-5 md:mb-12 font-extrabold text-4xl text-pink-700 italic font-serif rounded-full bg-pink-200 w-fit p-2 mx-auto'>Our Latest Toys</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 overflow-hidden'>
                <div data-aos-offset="200" data-aos="fade-up-right" data-aos-once="false" className='shadow-xl p-5 rounded hover:bg-pink-200'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/nnwdjJh/bcedea2285ca600818cf56a89c454f46.jpg" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Lighting car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 2600</p>
                        <button className='border border-pink-400 py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div data-aos-offset="200" data-aos="fade-up-right" data-aos-once="false" className='shadow-xl p-5 rounded hover:bg-pink-200'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/7tYpkgG/mayfair-main.jpg" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Yellow Mayfair car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 3900</p>
                        <button className='border border-pink-400 py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div data-aos-offset="200" data-aos="fade-up-right" data-aos-once="false" className='shadow-xl p-5 rounded hover:bg-pink-200'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src="https://i.ibb.co/Hgvpw3k/3d-fast-steering-remote-car-toys-world-original-imaggrrzw7vtqbpy.webp
                    " alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Sports Remote control car</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 4000</p>
                        <button className='border border-pink-400 py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
                <div data-aos-offset="200" data-aos="fade-up-right" data-aos-once="false" className='shadow-xl p-5 rounded hover:bg-pink-200'>
                    <img className='w-72 h-60 rounded-xl mx-auto' src=" https://i.ibb.co/FYSM2gc/aacfbf4c-0e5f-47c8-8768-07445c8b400e-dfd364f23038d3f594e26b3d2a554e26.webp" alt="" />
                    <hr className='mt-8 border border-gray-200' />
                    <h1 className='font-bold mt-2 text-xl'>Racing car toys</h1>
                    <p className='flex mt-3 text-yellow-400'>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <div className='flex justify-between'>
                        <p className='mt-2 text-lg font-semibold'>Price: 3200</p>
                        <button className='border border-pink-400 py-1 px-4 text-primary font-semibold'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestToys;