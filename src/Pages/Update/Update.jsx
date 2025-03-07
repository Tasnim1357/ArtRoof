import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

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

        fetch(`https://assignment10-server-swart.vercel.app/arts/${_id}`,{
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
                    text: "You updated the Art!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div>
             <Helmet>
            <title>ArtRoof | Update</title>
          </Helmet>
        <Navbar></Navbar>
        <h1 className='sm:text-3xl text-xl text-[#151515] font-poppins dark:text-white font-bold mt-10  duration-500 hover:text-[#AF9F7B] text-center'>Update Your Art & Craft Item</h1>
        <div className='flex justify-center items-center mt-10'>
            <form className='border-2 md:w-1/2 w-full mx-auto p-7  rounded-2xl space-y-4 ' onSubmit={handleAdd}>
                <div>
                <label className='font-lato text-lg dark:text-white'>Image <br />
                    <input type="text" placeholder='Image' name='image' defaultValue={image} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none dark:text-black' />
                </label>
                
                </div>
          
                <div>
           
                <label className='font-lato text-lg dark:text-white'>Item_name <br />
                    <input type="text" placeholder='Item_name' name='item_name' defaultValue={item_name} className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none' />
                 
                </label>

                </div>
              
                <div>
               
                <label className='font-lato text-lg dark:text-white'> Subcategory_Name<br />
                    {/* <input type="text" placeholder='Subcategory_Name' name='subcategory_Name'defaultValue={Subcategory_Name} className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' /> */}
                    <select name="subcategory_Name" defaultValue={Subcategory_Name} className='dark:text-black w-full p-2 mt-2' id="cars">
    <option value="Landscape Painting">Landscape Painting</option>
    <option value="Portrait Drawing">Portrait Drawing</option>
    <option value="Watercolour Painting">Watercolour Painting</option>
    <option value="Oil Painting">Oil Painting</option>
    <option value="Charcoal Sketching">Charcoal Sketching</option>
    <option value="Cartoon Drawing">Cartoon Drawing</option>
  </select>
             
                </label>
                </div>
                <div>
                <label  className='font-lato text-lg dark:text-white'> Short description <br />
                  
                    <input type="text" placeholder='Short description' name='short_description' defaultValue={short_description} className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg dark:text-white'> Price <br />
                  
                    <input type="text" placeholder='Price' name='price'defaultValue={price} className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none'  />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg dark:text-white'>Rating<br />
                  
                    <input type="text" placeholder='rating' name='rating' defaultValue={rating}  className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none'  />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg dark:text-white'> Customization <br />
                  
                    <input type="text" placeholder='customization' name='customization'defaultValue={customization} className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg dark:text-white'>Processing_time <br />
                  
                    <input type="text" placeholder='processing_time' name='processing_time' defaultValue={processing_time}className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
                <div>
                <label className='font-lato text-lg dark:text-white'>StockStatus <br />
                  
                    <input type="text" placeholder='stockStatus' name='stockStatus' defaultValue={stockStatus} className='p-2 dark:text-black mt-2 w-full border-b-black border-b-2 outline-none' />
                </label>
             
                </div>
               
           
              
               
                <div>
                    
                <input type="submit" name="" id="" value="Update" className="btn btn-block font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
                </div>
            </form>
        </div>
        <Footer></Footer>
        
    </div>
    );
};

export default Update;