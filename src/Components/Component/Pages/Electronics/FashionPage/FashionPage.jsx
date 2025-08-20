import React, { useState, useEffect } from "react";
import SectionTitle from "../../../Phones/SectionTitle/SectionTitle";
import Showphonedata from "../../../Phones/Showphonedata/Showphonedata";
 

const FashionPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const [brands, setBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("default");

  // Particle offsets for parallax
  const [topParticleOffsets, setTopParticleOffsets] = useState([]);
  const [bottomParticleOffsets, setBottomParticleOffsets] = useState([]);

  useEffect(() => {
    fetch("/Phone.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...items];

    if (brands.length > 0) filtered = filtered.filter(d => brands.includes(d.brand));
    filtered = filtered.filter(d => d.price <= maxPrice);

    if (sortBy === "low-high") filtered.sort((a,b) => a.price - b.price);
    else if (sortBy === "high-low") filtered.sort((a,b) => b.price - a.price);
    else if (sortBy === "newest") filtered.sort((a,b) => new Date(b.releaseDate) - new Date(a.releaseDate));

    setFilteredItems(filtered);
  }, [brands, maxPrice, sortBy, items]);

  const handleBrandChange = (brand) => {
    setBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const handleShowAll = () => setVisibleCount(filteredItems.length);

  // Initialize particle offsets
  useEffect(() => {
    setTopParticleOffsets([...Array(15)].map(() => Math.random() * 100));
    setBottomParticleOffsets([...Array(15)].map(() => Math.random() * 100));
  }, []);

  // Scroll listener for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setTopParticleOffsets(prev => prev.map(val => val + scroll * 0.02));
      setBottomParticleOffsets(prev => prev.map(val => val + scroll * 0.015));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topSections = [
    { title: "Latest Gadgets", desc: "Explore the newest electronics released this year.", img: "https://i.ibb.co/8c1TQpF/gadget.png", gradient: "bg-gradient-to-br from-indigo-400 via-indigo-200 to-indigo-100" },
    { title: "Top Brands", desc: "From Apple to Samsung, choose the best for your needs.", img: "https://i.ibb.co/9r1LJZP/brand.png", gradient: "bg-gradient-to-br from-purple-400 via-purple-200 to-purple-100" },
    { title: "Best Deals", desc: "Grab limited-time offers and discounts on popular items.", img: "https://i.ibb.co/FzG7nZL/deals.png", gradient: "bg-gradient-to-br from-pink-400 via-pink-200 to-pink-100" },
    { title: "Customer Support", desc: "Reliable service and warranty assistance at your fingertips.", img: "https://i.ibb.co/W2vHkVx/support.png", gradient: "bg-gradient-to-br from-green-400 via-green-200 to-green-100" },
  ];

  const bottomSections = [
    { title: "Quality Assurance", desc: "All electronics are verified and tested before shipping.", img: "https://i.ibb.co/2g9J1hN/quality.png", gradient: "bg-gradient-to-br from-indigo-400 via-indigo-200 to-indigo-100" },
    { title: "Free Shipping", desc: "Enjoy free shipping on orders over $100.", img: "https://i.ibb.co/T2wCwL7/shipping.png", gradient: "bg-gradient-to-br from-purple-400 via-purple-200 to-purple-100" },
    { title: "Easy Returns", desc: "Hassle-free returns within 30 days of purchase.", img: "https://i.ibb.co/hX6fR1h/returns.png", gradient: "bg-gradient-to-br from-pink-400 via-pink-200 to-pink-100" },
    { title: "Exclusive Offers", desc: "Sign up to receive members-only deals and promotions.", img: "https://i.ibb.co/1nW6GpH/offers.png", gradient: "bg-gradient-to-br from-green-400 via-green-200 to-green-100" },
  ];

  return (
    <div className="pt-24 px-4 md:px-8 lg:px-16">

      {/* Top Sections */}
      <div className="relative mb-8">
        {topParticleOffsets.map((offset, idx) => (
          <div key={idx} className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-bounce-slow" style={{ top: `${offset % 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random() * 3}s` }} />
        ))}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {topSections.map((section, idx) => (
            <div key={idx} className={`${section.gradient} p-6 rounded-2xl shadow-xl flex flex-col items-center text-center relative transition-transform hover:-translate-y-2 hover:shadow-2xl`}>
              <div className="absolute w-20 h-20 rounded-full bg-white opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
              <img src={section.img} alt={section.title} className="w-16 h-16 mb-4 animate-bounce-slow relative z-10 transition-transform hover:scale-110" />
              <h3 className="font-bold text-lg text-gray-800 hover:text-gray-900 transition-colors">{section.title}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-transform hover:translate-y-1">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Title */}
      <SectionTitle text="Top Electronics for You" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="card bg-base-100 shadow-sm p-4 md:sticky md:top-20 h-fit space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Brand</h2>
            <div className="flex flex-col gap-2">
              {["Apple", "Samsung", "Xiaomi", "Sony"].map(brand => (
                <label key={brand} className="flex items-center gap-2">
                  <input type="checkbox" checked={brands.includes(brand)} onChange={() => handleBrandChange(brand)} />
                  {brand}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Max Price: ${maxPrice}</h2>
            <input type="range" min="100" max="2000" value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className="range range-sm w-full" />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Sort By</h2>
            <select className="select select-sm w-full" onChange={(e)=>setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-3">
          {filteredItems.slice(0, visibleCount).map(item => (
            <Showphonedata key={item.id} phoneprops={item} />
          ))}
        </div>
      </div>

      {/* Show All Button */}
      {visibleCount < filteredItems.length && (
        <div className="text-center my-6">
          <button onClick={handleShowAll} className="btn btn-outline btn-primary">Show All</button>
        </div>
      )}

      {/* Bottom Sections */}
      <div className="relative mt-12">
        {bottomParticleOffsets.map((offset, idx) => (
          <div key={idx} className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse-slow" style={{ top: `${offset % 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${2 + Math.random() * 2}s` }} />
        ))}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {bottomSections.map((section, idx) => (
            <div key={idx} className={`${section.gradient} p-6 rounded-2xl shadow-xl flex flex-col items-center text-center relative transition-transform hover:-translate-y-2 hover:shadow-2xl`}>
              <div className="absolute w-20 h-20 rounded-full bg-white opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
              <img src={section.img} alt={section.title} className="w-16 h-16 mb-4 animate-bounce-slow relative z-10 transition-transform hover:scale-110" />
              <h3 className="font-bold text-lg text-gray-800 hover:text-gray-900 transition-colors">{section.title}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-transform hover:translate-y-1">{section.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FashionPage;
