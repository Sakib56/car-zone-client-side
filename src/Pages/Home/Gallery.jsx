import React from 'react';
import img1 from '../../assets/gallery/toy-g-1.jpg'
import img2 from '../../assets/gallery/toy-g-2.jpg'
import img3 from '../../assets/gallery/toy-g-3.jpg'
import img4 from '../../assets/gallery/toy-g-4.jpg'
import img5 from '../../assets/gallery/toy-g-5.jpg'
import img6 from '../../assets/gallery/toy-g-6.jpg'
import img7 from '../../assets/gallery/toy-g-7.jpg'
import img8 from '../../assets/gallery/toy-g-8.jpg'


const Gallery = () => {
    return (
        <div className='my-8 md:my-16'>
            <h1 className='text-center mb-10 font-extrabold text-4xl text-primary'>Our Toys Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img1} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img2} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img3} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img4} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img5} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img6} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img7} alt="" />
                </div>
                <div className='shadow-lg rounded p-5 mx-auto'>
                    <img className='w-72 h-56' src={img8} alt="" />
                </div>                
            </div>
        </div>
    );
};

export default Gallery;