import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ cars }) => {
    console.log(cars)
    const { _id, toy_name, picture, price, rating } = cars
    console.log(_id)
    return (
        <div className="card bg-base-100 shadow-2xl border-2 border-pink-600">
            <figure><img className='w-96 h-72 p-5' src={picture} alt="Shoes" /></figure>
            <div className="card-body bg-gradient-to-tr from-pink-50 to-pink-100 rounded-b-2xl">
                <h2 className="card-title text-2xl font-bold">
                    {toy_name}
                </h2>
                <h1 className='text-xl font-semibold'><span className='font-bold'>Price:</span> {price}</h1>
                <p className='text-lg font-semibold'>Rating: {rating}</p>
                <Link to={`/allToys/${_id}`}>
                    <div className="card-actions justify-end">
                        <button className='btn border-0 bg-primary'>View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CarCard;