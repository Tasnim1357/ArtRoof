import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import About from '../About/About';
import Works from '../Works/Works';
import CraftItem from '../CraftItem/CraftItem';
import Categories from '../Categories/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
             <Helmet>
            <title>ArtRoof | Home</title>
          </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
         
            <CraftItem></CraftItem>
            <Categories></Categories>
            <Works></Works>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;