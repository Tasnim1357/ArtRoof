import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const Card2 = ({category}) => {
    const {_id,image,item_name,Subcategory_Name,price,rating,short_description,processing_time}=category
    return (
        <div className="card  bg-base-100  p-2 shadow-xl overflow-hidden dark:bg-black dark:text-white dark:border dark:border-white " 
  
       >
           
        <figure className='px-3 h-min overflow-hidden rounded-md w-full'>
         <img src={image} alt="Shoes" className='w-full h-[300px] rounded-xl hover:scale-125 transition-all  duration-500 cursor-pointer' /></figure>
        <div className="card-body sm:px-5 px-3">
        <div className='pb-3 border-b-2'>
        <h2 className="card-title text-2xl font-lato font-bold">{item_name}</h2>
          <p className='text-[#838181] text-balance lg:text-lg font-inter'>{Subcategory_Name}</p>
        </div>
        <div className='pb-3 border-b-2 w-full'>
       
          <p className='text-[#838181] text-balance lg:text-lg font-inter'>{short_description}</p>
        </div>
         <div className='flex justify-between flex-wrap items-center pb-3 border-b-2'>
            <p className='text-black text-lg font-inter font-semibold dark:text-white'>Price: {price}$</p>
            <p className='text-black text-lg font-inter font-semibold dark:text-white'> Time: {processing_time}</p>
           <div className='flex items-center space-x-2'>
           <p className='text-[#838181] text-base font-inter mt-1'>{rating}</p>
            <ReactStars
    count={4}
    size={24}         
   isHalf={true}
   value={4}
   emptyIcon={<i className="far fa-star"></i>}
   halfIcon={<i className="fa fa-star-half-alt"></i>}
   fullIcon={<i className="fa fa-star"></i>}
   activeColor="#ffd700"
    
  />
           </div>
        </div>
      
          <div className="card-actions justify-end">
          <div className='flex items-center justify-between w-full'>
              <Link to={`/details/${_id}`} className="btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]">View Details</Link>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Card2;