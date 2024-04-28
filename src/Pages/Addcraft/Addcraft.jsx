import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import Footer from '../Shared/Footer/Footer';

const Addcraft = () => {
    const {user}=useContext(AuthContext)
    const handleAdd=(e)=>{
        e.preventDefault()
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const image=form.image.value;
        const item_name=form.item_name.value;
        const Subcategory_Name=form.subcategory_Name.value;
        const short_description=form.short_description.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const stockStatus=form.stockStatus.value;
        const newArt={name,email,image,item_name,Subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus}
        console.log(newArt)

        fetch('https://assignment10-server-swart.vercel.app/arts',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(newArt)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Great!",
                    text: "You added the Art item!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='sm:text-3xl text-xl dark:text-white text-[#151515] font-poppins font-bold mt-10  duration-500 hover:text-[#AF9F7B] text-center'>Add Your Art & Craft Item</h1>
            <div className='flex justify-center items-center mt-10'>
                <form className='border-2 md:w-1/2 w-full mx-auto p-7  rounded-2xl space-y-4 ' onSubmit={handleAdd}>
                    <div>
                    <label className='font-lato text-lg dark:text-white'>Image <br />
                        <input type="text" placeholder='Image' required name='image' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                    
                    </div>
              
                    <div>
               
                    <label className='font-lato text-lg dark:text-white'>Item_name <br />
                        <input type="text" placeholder='Item_name' required name='item_name' className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                     
                    </label>

                    </div>
                  
                    <div>
                   
                    <label className='font-lato text-lg dark:text-white'> Subcategory_Name<br />
                        {/* <input type="text" placeholder='Subcategory_Name' required name='subcategory_Name' className='p-2 mt-2 dark:text-black w-full border-b-black border-b-2 outline-none' /> */}
                        <select name="subcategory_Name" className='dark:text-black w-full p-2 mt-2' id="cars">
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
                      
                        <input type="text" placeholder='Short description' name='short_description' required className='p-2 mt-2 dark:text-black w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'> Price <br />
                      
                        <input type="text" placeholder='Price' name='price' required className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none'  />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'>Rating<br />
                      
                        <input type="text" placeholder='rating' name='rating' required  className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none'  />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'> Customization <br />
                      
                        <input type="text" placeholder='customization' name='customization' required className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'>Processing_time <br />
                      
                        <input type="text" placeholder='processing_time' name='processing_time' required className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'>StockStatus <br />
                      
                        <input type="text" placeholder='stockStatus' name='stockStatus' required className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'>User Email <br />
                      
                        <input type="email" placeholder='Email' name='email' value={user.email} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg dark:text-white'>User Name <br />
                      
                        <input type="text" placeholder='name' name='name'  value={user.displayName} className='p-2 mt-2 w-full dark:text-black border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                        
                    <input type="submit" name="" id="" value="Add" className="btn btn-block font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
                    </div>
                </form>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Addcraft;