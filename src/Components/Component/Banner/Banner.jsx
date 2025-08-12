import React from 'react';
import image from './../../../assets/Images/download.jpg'

const Banner = () => {
    return (
        <div className=''>
            {/* 1st sectionb */}
            <div className='bg-indigo-500 text-white pb-40 pt-20'>
                <h1 className='text-4xl pb-4 font-bold'>Upgrade your Teach Accessorize with <br /> Gadget Heaven Accessorize </h1>
                <p className='pb-4 textarea-md'>Lorem ipsum dolor , consectetur adipisicing  temporibus, <br />i  voluptas. Accusantium incidunt   enim facere?</p>
                <button className='btn btn-xs rounded-3xl p-4 text-[14px] '>Shop Now</button>
            </div>
            {/* images */}
            <div className='-mt-28'>
                <img className='w-9/12 h-72 mx-auto border-t-1 border-x-1  border-white p-2' src={image} alt="" />
            </div>
            <h1 className='text-3xl text-center text-indigo-600 font-bold py-4'>Explore Cutting-edge Gadgets</h1>

        </div>
    );
};

export default Banner;