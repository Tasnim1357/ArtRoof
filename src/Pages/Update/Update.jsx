import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
 
    const art= useLoaderData()
    console.log(art)
    const {_id,image,item_name,Subcategory_Name,price,rating,stockStatus,customization,processing_time,short_description}=art
   console.log(item_name)
    const handleAdd=(e)=>{
        e.preventDefault()
        const form =e.target;
        // const name=form.name.value;
        // const email=form.email.value;
        const image=form.image.value;
        const item_name=form.item_name.value;
        const Subcategory_Name=form.subcategory_Name.value;
        const short_description=form.short_description.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const stockStatus=form.stockStatus.value;
        const updatedArt={image,item_name,Subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus}
        console.log(updatedArt)

        fetch(`http://localhost:5000/arts/${_id}`,{
            method:'PUT',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(updatedArt)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: "Great!",
                    text: "You updated the coffee!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div>
        <Navbar></Navbar>
        <h1 className='sm:text-3xl text-xl text-[#151515] font-poppins font-bold mt-10  duration-500 hover:text-[#AF9F7B] text-center'>Update Your Art & Craft Item</h1>
        <div className='flex justify-center items-center mt-10'>
            <form className='border-2 md:w-1/2 w-full mx-auto p-7  rounded-2xl space-y-4 ' onSubmit={handleAdd}>
                <div>
                <label className='font-lato text-lg'>Image <br />
                    <input type="text" placeholder='Image' name='image' defaultValue={image} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
                
                </div>
          
                <div>
           
                <label className='font-lato text-lg'>Item_name <br />
                    <input type="text" placeholder='Item_name' name='item_name' defaultValue={item_name} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                 
                </label>

                </div>
              
                <div>
               
                <label className='font-lato text-lg'> Subcategory_Name<br />
                    <input type="text" placeholder='Subcategory_Name' name='subcategory_Name'defaultValue={Subcategory_Name} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                  
                </label>
                </div>
                <div>
                <label  className='font-lato text-lg'> Short description <br />
                  
                    <input type="text" placeholder='Short description' name='short_description' defaultValue={short_description} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg'> Price <br />
                  
                    <input type="text" placeholder='Price' name='price'defaultValue={price} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none'  />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg'>Rating<br />
                  
                    <input type="text" placeholder='rating' name='rating' defaultValue={rating}  className='p-2 mt-2 w-full border-b-black border-b-2 outline-none'  />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg'> Customization <br />
                  
                    <input type="text" placeholder='customization' name='customization'defaultValue={customization} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg'>Processing_time <br />
                  
                    <input type="text" placeholder='processing_time' name='processing_time' defaultValue={processing_time}className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg'>StockStatus <br />
                  
                    <input type="text" placeholder='stockStatus' name='stockStatus' defaultValue={stockStatus} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
           
              
               
                <div>
                    
                <input type="submit" name="" id="" value="Update" className="btn btn-block font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
                </div>
            </form>
        </div>
        
    </div>
    );
};

export default Update;