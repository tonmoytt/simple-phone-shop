import React, { useEffect, useState } from 'react';
import Showphonedata from './Showphonedata/Showphonedata';

const Phones = () => {
  const [phone, setphone] = useState([]);
  const [filterdataload, setfilterdataload] = useState([]);

  useEffect(() => {
    fetch('/Phone.json')
      .then(res => res.json())
      .then(data => {
        setphone(data);
        setfilterdataload(data);
      });
  }, []);

  const handlefilterdata = (data) => {
    if (data === 'all') {
      setfilterdataload(phone);
    } else {
      const Filtereddata = phone.filter(d => d.device === data);
      setfilterdataload(Filtereddata);
    }
  };

  return (
    <div className='mt-6 px-4 md:px-8 lg:px-16'>
      {/* Main Grid */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {/* Filter Section */}
        <div className="card bg-base-100 shadow-sm p-4 md:sticky md:top-20">
          <h2 className="text-lg font-semibold mb-4">Filter by Device</h2>
          <div className="flex flex-col gap-3">
            <button onClick={() => handlefilterdata('all')} className="btn btn-xs md:btn-sm lg:btn-md text-[16px] md:text-[18px]">All</button>
            <button onClick={() => handlefilterdata('laptop')} className="btn btn-xs md:btn-sm lg:btn-md text-[16px] md:text-[18px]">Laptops</button>
            <button onClick={() => handlefilterdata('earbuds')} className="btn btn-xs md:btn-sm lg:btn-md text-[16px] md:text-[18px]">Accessories</button>
            <button onClick={() => handlefilterdata('phone')} className="btn btn-xs md:btn-sm lg:btn-md text-[16px] md:text-[18px]">Phones</button>
            <button className="btn btn-xs md:btn-sm lg:btn-md text-[16px] md:text-[18px]">Smart watch</button>
          </div>
        </div>

        {/* Phones Display Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-3'>
          {filterdataload.map(phone => (
            <Showphonedata key={phone.id} phoneprops={phone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
