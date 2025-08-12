import React, { useEffect, useState } from 'react';
import Showphonedata from './Showphonedata/Showphonedata';

const Phones = () => {
    const [phone, setphone] = useState([])
    
    const [filterdataload, setfilterdataload] = useState([])

    useEffect(() => {
        fetch('/Phone.json')
            .then(res => res.json())
            .then(data => {
                setphone(data);
                setfilterdataload(data);
            })

    }, [])


    const handlefilterdata = data => {
        if (data === 'all') {
            setfilterdataload(phone)
        }
        else {
            const Filtereddata = phone.filter(d => d.device === data)
            setfilterdataload(Filtereddata)
        }

    }
    return (
        <div className='mt-6 grid grid-cols-4 gap-4'>
            {/* 1st section - Filters */}
            <div className="card bg-base-100 shadow-sm col-span-1 p-4">




                <div className="flex flex-col gap-3">
                    <button onClick={() => handlefilterdata('all')} className="btn btn-xs text-[18px]">All</button>
                    <button onClick={() => handlefilterdata('laptop')} className="btn btn-xs text-[18px]">Laptops</button>
                    <button onClick={() => handlefilterdata('earbuds')} className="btn btn-xs text-[18px]">Accessories</button>
                    <button onClick={() => handlefilterdata('phone')} className="btn btn-xs text-[18px]">Phones</button>
                    <button className="btn btn-xs text-[18px]">Smart watch</button>
                </div>
            </div>

            {/* 2nd section - Phones */}
            <div className='grid grid-cols-3 gap-4 col-span-3'>
                {
                    filterdataload.map(phone => (
                        <Showphonedata key={phone.id} phoneprops={phone}></Showphonedata>
                    ))
                     
                }
            </div>
        </div>

    );
};

export default Phones;