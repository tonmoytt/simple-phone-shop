import React from 'react';
import { Link } from 'react-router-dom';

const Showphonedata = ({ phoneprops }) => {
    const {id, name, image, price } = phoneprops
    return (
        <div>
            <div className="card bg-base-100 w-72 h-full shadow-sm flex flex-col justify-between">
                <figure className="h-48 overflow-hidden">
                    <img src={image} alt={name} className="h-full w-full object-cover" />
                </figure>

                <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                        <h2 className="text-center text-xl font-bold">{name}</h2>
                        <p className="font-serif text-center mt-2">
                            Price : <span className="text-lg">${price}</span>
                        </p>
                    </div>

                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary rounded-lg mt-4 w-full">
                            Details
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Showphonedata;