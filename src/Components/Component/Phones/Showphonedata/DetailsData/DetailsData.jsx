import React from 'react';
import toast from 'react-hot-toast';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useLoaderData, useParams, useOutletContext, Link } from 'react-router-dom';

const DetailsData = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { handleAddToCart, Handlewishcount } = useOutletContext();

    const product = data.find(d => d.id === parseInt(id));
    const { image, name, brand, model, rating, price, about, rom, ram } = product;

    return (
        <div>
            <div className='bg-indigo-600 text-white text-center py-20'>
                <h1 className='text-4xl font-bold mb-3'>Product Details</h1>
                <p className='text-sm max-w-2xl mx-auto'>
                    Learn more about the product you're about to purchase!
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 md:w-9/12 mx-auto py-10 -mt-24 bg-white rounded-xl shadow-lg px-6'>
                <div className='flex justify-center items-center'>
                    <img src={image} alt={name} className='w-full max-w-sm object-cover rounded-lg' />
                </div>

                <div className='text-start'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className="text-xl mt-3 text-indigo-600 font-semibold">Price: ${price}</p>
                    <button className='bg-green-100 text-green-700 px-3 py-1 rounded-2xl font-medium text-sm mt-2'>
                        In Stock
                    </button>
                    <p className='mt-4 text-gray-700'>{about}</p>

                    <div className='mt-6'>
                        <h2 className='text-xl font-bold mb-2'>Specifications:</h2>
                        <ul className='list-disc list-inside text-gray-800 font-medium space-y-1'>
                            <li>Model: {model}</li>
                            <li>RAM: {ram}</li>
                            <li>ROM: {rom}</li>
                            <li>Brand: {brand}</li>
                        </ul>
                    </div>

                    <p className='text-lg mt-4 font-bold text-gray-800'>
                        Rating: <span className='font-normal'>{rating}</span>
                    </p>
                    {/* btn function */}
                    <div className='space-x-4 mt-6 flex'>
                        <button
                            onClick={() => {
                                handleAddToCart(product);
                                
                            }}


                        >
                            <Link className='bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-3xl flex items-center space-x-2 shadow-md transition'>
                                <span>Add to Cart</span>
                                <FaShoppingCart />
                            </Link>
                        </button>

                        <button onClick={() => Handlewishcount(product)} className='bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-3xl flex items-center shadow'>
                            <Link>     <FaHeart className='text-red-500' /> </Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsData;