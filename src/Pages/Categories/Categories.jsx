import React, { useEffect, useState } from 'react';
import Catcard from '../CategoryCard/Catcard';

const Categories = () => {
        const [category, setCategory]=useState([])
        const [loading, setLoading] = useState(true);    

          
            useEffect(() => {
                async function fetchData() {
                    try {
                        const res = await fetch('https://assignment10-server-swart.vercel.app/subCategories');
                        const data = await res.json();
                        setCategory(data);
                        setLoading(false); // Set loading to false after data is fetched
                    } catch (error) {
                        console.error("Error fetching data:", error);
                        setLoading(false); // Set loading to false in case of error
                    }
                }
                fetchData();
            }, []);
           
 
          
    return (
        <div className='mt-16 space-y-8'>
            <h1 className='sm:text-5xl text-3xl dark:text-white text-[#151515] font-poppins font-bold text-center duration-500 hover:text-[#AF9F7B]'>All Art & Painting Categories</h1>
            {loading ? ( // Show loader when loading is true
                <div className="text-center mt-10">
                    <span className="loading loading-spinner loading-lg dark:text-white"></span>
                </div>
            ) : ( // Render categories when loading is false
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                    {category.map(cat => (
                        <Catcard key={cat._id} category={cat} />
                    ))}
                </div>
            )}
          
          
        </div>
    );
};

export default Categories;