import React from 'react';
import { MdClose } from 'react-icons/md';
import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {
  const {
    cartItems,
    Showdashboard,
    Handledeleted,
    Handledeleteditems
  } = useOutletContext();

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Cart Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4 mt-20">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>No items in your cart yet.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="mx-auto text-center">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div
                    onClick={() => Handledeleteditems(item.id)}
                    className="ml-auto tooltip tooltip-left cursor-pointer"
                    data-tip="Deleted Now"
                  >
                    <MdClose className="text-red-600 btn" />
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <img src={item.image} className="w-60 rounded" alt={item.name} />
                </div>
                <div className="mt-10 text-center">
                  <button className="btn btn-accent px-6">Buy Now</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Wishlist Section */}
      <div>
      
        <h1 className="text-3xl font-bold mb-4 mt-20">Wishlist</h1>
        {Showdashboard.length === 0 ? (
          <p>No items in your Wishlist yet.</p>
        ) : (
          <ul className="space-y-4">
            {Showdashboard.map((item) => (
              <li key={item.id} className="border p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div className="mx-auto text-center">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div
                    onClick={() => Handledeleted(item.id)}
                    className="ml-auto tooltip tooltip-left cursor-pointer"
                    data-tip="Will be deleted"
                  >
                    <MdClose className="text-red-600 btn" />
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <img src={item.image} className="w-60 rounded" alt={item.name} />
                </div>
                <div className="mt-10 text-center">
                  <button className="btn btn-accent px-6">Buy Now</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
