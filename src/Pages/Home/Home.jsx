import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import About from '../About/About';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Works></Works>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;