import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarCard = ({ cars }) => {
    // console.log(cars)
    const { _id, toy_name, picture, price, rating } = cars
    // console.log(_id)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div data-aos-offset="200" data-aos="zoom-in" className="card bg-base-100 shadow-2xl border-2 border-pink-600">
            <figure><img className='w-80 h-64 p-5' src={picture} alt="Shoes" /></figure>
            <div className="card-body bg-pink-200 rounded-b-2xl italic hover:bg-pink-300">
                <h2 className="card-title text-2xl font-bold text-pink-500">
                    {toy_name}
                </h2>
                <h1 className='text-xl font-semibold text-pink-600 text-opacity-80'><span className='font-bold'>Price:</span> ${price}</h1>
                <p className='text-lg font-semibold text-pink-600'>Rating: {rating}</p>
                <Link to={`/toy/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className='btn border-0 bg-primary'>View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CarCard;