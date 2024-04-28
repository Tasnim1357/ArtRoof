import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Card2 from '../Card2/Card2';
import Footer from '../Shared/Footer/Footer';

const CategoryPage = () => {
    const categories=useLoaderData()
    
  
    return (
       <div>
        <Navbar></Navbar>
         <div className='mt-16'>
            
            <h1 className='sm:text-5xl text-xl duration-500 hover:text-[#AF9F7B] text-[#151515] font-poppins font-bold text-center dark:text-white'>Other items in this Category </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-16'>
                {
                    categories.map(category=><Card2 key={category._id} category={category}></Card2>)
                }
            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default CategoryPage;