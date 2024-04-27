import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ArtItem from '../ArtItem/ArtItem';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Myarts = () => {
    const {user}=useContext(AuthContext)
    const [item, setItem]=useState([])
    useEffect(()=>{
        fetch(`https://assignment10-server-swart.vercel.app/myarts/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[user])
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-16'>
                {item.map(i=><ArtItem key={i._id} art={i}></ArtItem>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Myarts;