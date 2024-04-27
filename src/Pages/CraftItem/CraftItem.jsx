import React, { useEffect, useState } from 'react';
import Craft from '../Craft/Craft';

const CraftItem = () => {
    const [arts,setArts]=useState([])

    useEffect(()=>{

        async function fetchData(){
            const res=await fetch('https://assignment10-server-swart.vercel.app/arts');
            const data= await res.json();
            setArts(data)
        }
        fetchData()

    },[])
    console.log(arts)
    return (
        <div className='mt-16 space-y-8'>
            <h1 className='sm:text-5xl text-3xl text-[#151515] font-poppins font-bold text-center duration-500 hover:text-[#AF9F7B]'>Explore Our Arts and Paint</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2'>
          
            {
                arts.slice(0, 6).map(art => (
                    <Craft key={art._id} art={art}></Craft>
                   
                  ))
            }

            </div>

           
       </div>
    );
};

export default CraftItem;