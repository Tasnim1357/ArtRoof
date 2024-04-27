import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const AllArts = () => {

    const arts = useLoaderData();
    // const [loading, setLoading] = useState(true);

  
    // setTimeout(() => {
    //     setLoading(false);
    // }, 1000); 
    const loading = arts === undefined; 

    return (
       <div>
        <Navbar></Navbar>
         <div className='mt-16 space-y-8'>
        <h1 className='sm:text-5xl text-3xl text-[#151515] font-poppins font-bold text-center duration-500 hover:text-[#AF9F7B]'> Arts and Paints of all users</h1>
      <div>

<div className="overflow-x-auto">
                    {loading ? (
                        <div className="text-center mt-10">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : (
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL No</th>
                                    <th>Item Name</th>
                                    <th>Subcategory Name</th>
                                    <th>Price</th>
                                    <th>Stock Status</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arts.slice(6).map((art, idx) => (
                                    <tr key={art._id}>
                                        <th>{idx + 1}</th>
                                        <td>{art.item_name}</td>
                                        <td>{art.Subcategory_Name}</td>
                                        <td>{art.price}</td>
                                        <td>{art.stockStatus}</td>
                                        <td> <Link to={`/details/${art._id}`} className="btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]">View Details</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
      
      

        </div>

       
   </div>
   <Footer></Footer>
       </div>
    );
};

export default AllArts;