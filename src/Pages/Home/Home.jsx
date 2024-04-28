import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import About from '../About/About';
import Works from '../Works/Works';
import CraftItem from '../CraftItem/CraftItem';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
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