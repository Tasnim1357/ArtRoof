import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Swal from 'sweetalert2';

const Addcraft = () => {
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

        fetch('http://localhost:5000/arts',{
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
                    text: "You added the coffee!",
                    icon: "success"
                  });
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='sm:text-3xl text-xl text-[#151515] font-poppins font-bold mt-10  duration-500 hover:text-[#AF9F7B] text-center'>Add Your Art & Craft Item</h1>
            <div className='flex justify-center items-center mt-10'>
                <form className='border-2 md:w-1/2 w-full mx-auto p-7  rounded-2xl space-y-4 ' onSubmit={handleAdd}>
                    <div>
                    <label className='font-lato text-lg'>Image <br />
                        <input type="text" placeholder='Image' name='image' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                    
                    </div>
              
                    <div>
               
                    <label className='font-lato text-lg'>Item_name <br />
                        <input type="text" placeholder='Item_name' name='item_name' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                     
                    </label>

                    </div>
                  
                    <div>
                   
                    <label className='font-lato text-lg'> Subcategory_Name<br />
                        <input type="text" placeholder='Subcategory_Name' name='subcategory_Name' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                      
                    </label>
                    </div>
                    <div>
                    <label  className='font-lato text-lg'> Short description <br />
                      
                        <input type="text" placeholder='Short description' name='short_description' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'> Price <br />
                      
                        <input type="text" placeholder='Price' name='price' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none'  />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'>Rating<br />
                      
                        <input type="text" placeholder='rating' name='rating'  className='p-2 mt-2 w-full border-b-black border-b-2 outline-none'  />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'> Customization <br />
                      
                        <input type="text" placeholder='customization' name='customization' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'>Processing_time <br />
                      
                        <input type="text" placeholder='processing_time' name='processing_time'className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'>StockStatus <br />
                      
                        <input type="text" placeholder='stockStatus' name='stockStatus' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'>User Email <br />
                      
                        <input type="email" placeholder='Email' name='email' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                    <label className='font-lato text-lg'>User Name <br />
                      
                        <input type="text" placeholder='name' name='name' className='p-2 mt-2 w-full border-b-black border-b-2 outline-none' />
                    </label>
                 
                    </div>
                   
                    <div>
                        
                    <input type="submit" name="" id="" value="Add" className="btn btn-block font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] mt-3" />
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Addcraft;