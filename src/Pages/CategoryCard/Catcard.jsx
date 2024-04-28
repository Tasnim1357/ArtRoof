import React from 'react';
import { Link } from 'react-router-dom';

const Catcard = ({category}) => {
    const {_id,image,Subcategory_Name,info}=category
    return (
        <Link to={`/category/${Subcategory_Name}`} className="card cursor-pointer bg-base-100 shadow-xl overflow-hidden  dark:bg-black dark:border dark:border-white" 
        >
         <figure className='px-3 h-min overflow-hidden rounded-md w-full'>
          <img src={image} alt="Shoes" className='w-full h-[300px] rounded-xl hover:scale-125 transition-all  duration-500 cursor-pointer' /></figure>
         <div className="card-body sm:px-5 px-3 dark:text-white">
         <div className='pb-3 border-b-2'>
         <h2 className="card-title text-2xl font-lato font-bold">{Subcategory_Name}</h2>
          
         </div>
          <div className='flex justify-between items-center pb-3 border-b-2'>
             <p className='text-black text-lg font-inter font-semibold dark:text-white'>{info}</p>
            
         </div>
       
           <div className="card-actions justify-end">
      
           </div>
         </div>
       </Link>
    );
};

export default Catcard;