import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2';

const ArtItem = ({art,item,setItem}) => {
    const {_id,image,item_name,price,rating,customization,stockStatus}=art
    const handleDel=(_id)=>{
      console.log(_id)
      Swal.fire({
          title: "Do you want to delete the Art?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Delete",
          denyButtonText: `Don't Delete`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
         
           fetch(`https://assignment10-server-swart.vercel.app/arts/${_id}`,{
              method: `DELETE`
           })
           .then(res=> res.json())
           .then(data=>{
              console.log(data)
              if(data.deletedCount>0){
                  Swal.fire("Deleted!", "", "success");
               }
               const remaining=item.filter(cof=>cof._id !== _id)
               setItem(remaining)
          })
         
      } else if (result.isDenied) {
            Swal.fire("Not deleted", "", "info");
          }
        });
 }
    return (
        <div className="card  bg-base-100 shadow-xl overflow-hidden  dark:bg-black dark:border dark:border-white" 
       >
           <div className='bg-[#2D394B] text-white w-28 rounded-xl transform translate-y-12 ml-4 p-2 '>{stockStatus}</div>
        <figure className='px-3 h-min overflow-hidden rounded-md w-full'>
         <img src={image} alt="Shoes" className='w-full h-[300px] rounded-xl hover:scale-125 transition-all  duration-500 cursor-pointer' /></figure>
        <div className="card-body sm:px-5 px-3 dark:text-white">
        <div className='pb-3 border-b-2'>
        <h2 className="card-title text-2xl font-lato font-bold">{item_name}</h2>
          <p className='text-[#838181] text-balance lg:text-lg font-inter'>Customizable: {customization}</p>
        </div>
         <div className='flex justify-between items-center pb-3 border-b-2'>
            <p className='text-black text-lg font-inter font-semibold dark:text-white'>Price: {price}$</p>
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
              <Link to={`/update/${_id}`} className="btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]">Update</Link>
              <Link  className="btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]" onClick={()=>handleDel(_id)}>Delete</Link>
          </div>
          </div>
        </div>
      </div>
    );
};

export default ArtItem;