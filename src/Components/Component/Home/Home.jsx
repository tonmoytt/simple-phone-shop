import React from 'react';
import Banner from '../Banner/Banner';
import Phones from '../Phones/Phones';
import Brands from '../Brands/Brands';

const Home = () => {
    return (
        <div>
           
           <Banner></Banner> 
           <Brands></Brands>
           <Phones></Phones>
        </div>
    );
};

export default Home;