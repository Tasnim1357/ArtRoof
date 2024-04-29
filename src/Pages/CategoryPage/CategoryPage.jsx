import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Card2 from '../Card2/Card2';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const CategoryPage = () => {
    const [loading, setLoading] = useState(true);
    const categories=useLoaderData()

    useEffect(() => {
        if (categories && categories.length > 0) {
            setLoading(false);
        }
    }, [categories]);
  
    return (
       <div>
         <Helmet>
            <title>ArtRoof | Categories</title>
          </Helmet>
        <Navbar></Navbar>
         <div className='mt-16'>
            
            <h1 className='sm:text-5xl text-xl duration-500 hover:text-[#AF9F7B] text-[#151515] font-poppins font-bold text-center dark:text-white'>Other items in this Category </h1>
            {loading ? ( 
                    <div className="text-center mt-10">
                        <span className="loading loading-spinner loading-lg dark:text-white"></span>
                    </div>
                ) : ( 
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-16'>
                        {categories.map(category => (
                            <Card2 key={category._id} category={category} />
                        ))}
                    </div>
                )}
        </div>
        <Footer></Footer>
       </div>
    );
};

export default CategoryPage;