import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ArtItem from '../ArtItem/ArtItem';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Myarts = () => {



const { user } = useContext(AuthContext);
const [arts, setArts] = useState([]);
const [loading, setLoading] = useState(true);
const [showCustomization, setShowCustomization] = useState(null);

useEffect(() => {
    fetch(`https://assignment10-server-swart.vercel.app/myarts/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setArts(data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
}, [user?.email]);

// Example of setting the 'item' state using 'setItem' function
const setItem = (newItem) => {
    setArts(newItem);
};

const filterArtsByCustomization = () => {
    if (showCustomization === null) {
        return arts; // Show all data if no filter applied
    } else {
        return arts.filter(art => art.customization.toLowerCase() === (showCustomization ? "yes" : "no"));
    }
};




    return (
        <div>
            <Navbar></Navbar>
           <div className='flex md:justify-end mt-2'>
           <details className="dropdown">
  <summary className="m-1 btn font-lato sm:text-xl text-balance bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B]">filter by customization</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={() => setShowCustomization(true)}>Yes</button></li>
    <li><button onClick={() => setShowCustomization(false)}>No</button></li>
    
  </ul>
</details>
           </div>
            {
                loading?(
                    <div className="text-center mt-10">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ): (<div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-10'>


                    {filterArtsByCustomization().map(art => (
                        <ArtItem key={art._id} art={art} item={arts} setItem={setItem} />
                    ))}
                {/* {arts.map(art => (
                        <ArtItem key={art._id} art={art} item={arts} setItem={setItem} />
                    ))} */}
            </div>)
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Myarts;