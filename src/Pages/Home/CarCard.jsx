import React from 'react';

const CarCard = ({ cars }) => {
    console.log(cars)
    const { toyname, picture, price, rating } = cars
    return (
        <div className="card bg-base-100 shadow-2xl border-2 border-pink-600">
            <figure><img className='w-96 h-72 p-5' src={picture} alt="Shoes" /></figure>
            <div className="card-body bg-gradient-to-tr from-pink-50 to-pink-100 rounded-b-2xl">
                <h2 className="card-title text-2xl font-bold">
                   {toyname}
                </h2>
                <h1 className='text-xl font-semibold'><span className='font-bold'>Price:</span> {price}</h1>
                <p className='text-lg font-semibold'>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <button className='btn border-0 bg-primary'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;