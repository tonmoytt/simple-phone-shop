import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
  // ---------------------- Cart State ----------------------
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.some(cart => cart.id === item.id);

    if (isAlreadyAdded) {
      toast.error('Already added to cart!');
      return;
    }

    setCartItems(prev => [...prev, item]);
    setCartCount(prev => prev + 1);
    toast.success(`${item.name} added to cart!`);
  };

  const Handledeleteditems = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    setCartCount(prev => prev - 1);
    toast.success('Item removed from cart!');
  };

  // ---------------------- Wishlist State ----------------------
  const [Showdashboard, setshowdashboard] = useState([]);
  const [Wishlist, setwithlist] = useState(0);

  const Handlewishcount = (item) => {
    const isWishlisted = Showdashboard.some(wish => wish.id === item.id);

    if (isWishlisted) {
      toast.error('Already in wishlist!');
      return;
    }

    setshowdashboard(prev => [...prev, item]);
    setwithlist(prev => prev + 1);
    toast.success(`${item.name} added to wishlist!`);
  };

  const Handledeleted = (id) => {
    const updated = Showdashboard.filter(item => item.id !== id);
    setshowdashboard(updated);
    setwithlist(prev => prev - 1);
    toast.success('Item removed from wishlist!');
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar cartCount={cartCount} Wishlist={Wishlist} />

      <Outlet
        context={{
          handleAddToCart,
          cartItems,
          Handlewishcount,
          Showdashboard,
          Handledeleted,
          Handledeleteditems,
        }}
      />

      <Footer />
    </div>
  );
};

export default Root;
