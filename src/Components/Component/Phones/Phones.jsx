import React, { useEffect, useState } from 'react';
import Showphonedata from './Showphonedata/Showphonedata';
import SectionTitle from './SectionTitle/SectionTitle';

const Phones = () => {
  const [phone, setphone] = useState([]);
  const [filterdataload, setfilterdataload] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // Initially 12

  // Filters
  const [selectedDevice, setSelectedDevice] = useState('all');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    fetch('/Phone.json')
      .then(res => res.json())
      .then(data => {
        setphone(data);
        setfilterdataload(data);
      });
  }, []);

  // Apply all filters whenever one changes
  useEffect(() => {
    let filtered = [...phone];

    // Device filter
    if (selectedDevice !== 'all') {
      filtered = filtered.filter(d => d.device === selectedDevice);
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(d => selectedBrands.includes(d.brand));
    }

    // Rating filter
    if (selectedRating) {
      filtered = filtered.filter(d => d.rating >= selectedRating);
    }

    // Price filter
    filtered = filtered.filter(d => d.price <= maxPrice);

    // Sorting
    if (sortBy === 'low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    setfilterdataload(filtered);
  }, [selectedDevice, selectedBrands, selectedRating, maxPrice, sortBy, phone]);

  // Handle brand checkbox
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Show All button handler
  const handleShowAll = () => {
    setVisibleCount(filterdataload.length);
  };

  return (
    <div className='mt-6 px-4 md:px-8 lg:px-16'>
      <SectionTitle text="Pick Your Dream device" />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        
        {/* Sidebar Filters */}
        <div className="card bg-base-100 shadow-sm p-4 md:sticky md:top-20 h-fit space-y-6">
          {/* Device Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Filter by Device</h2>
            <div className="flex flex-col gap-2">
              <button onClick={() => setSelectedDevice('all')} className="btn btn-xs md:btn-sm lg:btn-md">All</button>
              <button onClick={() => setSelectedDevice('laptop')} className="btn btn-xs md:btn-sm lg:btn-md">Laptops</button>
              <button onClick={() => setSelectedDevice('earbuds')} className="btn btn-xs md:btn-sm lg:btn-md">Accessories</button>
              <button onClick={() => setSelectedDevice('phone')} className="btn btn-xs md:btn-sm lg:btn-md">Phones</button>
              <button onClick={() => setSelectedDevice('watch')} className="btn btn-xs md:btn-sm lg:btn-md">Smart watch</button>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Price Range</h2>
            <input
              type="range"
              min="100"
              max="2000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="range range-sm"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>$100</span>
              <span>${maxPrice}</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Brand</h2>
            <div className="flex flex-col gap-2 text-sm">
              {['Apple', 'Samsung', 'Xiaomi', 'Realme'].map((brand) => (
                <label key={brand}>
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Ratings</h2>
            <div className="flex flex-col gap-2 text-sm">
              <label><input type="radio" name="rating" onChange={() => setSelectedRating(5)} /> ⭐⭐⭐⭐⭐</label>
              <label><input type="radio" name="rating" onChange={() => setSelectedRating(4)} /> ⭐⭐⭐⭐ & up</label>
              <label><input type="radio" name="rating" onChange={() => setSelectedRating(3)} /> ⭐⭐⭐ & up</label>
              <label><input type="radio" name="rating" onChange={() => setSelectedRating(null)} /> All</label>
            </div>
          </div>

          {/* Sort */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Sort By</h2>
            <select
              className="select select-sm w-full"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Display Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-3'>
          {filterdataload.slice(0, visibleCount).map(phone => (
            <Showphonedata key={phone.id} phoneprops={phone} />
          ))}
        </div>
      </div>

      {/* Show All Button */}
      {visibleCount < filterdataload.length && (
        <div className='text-center my-6'>
          <button onClick={handleShowAll} className='btn text-xl btn-outline btn-primary'>
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Phones;
