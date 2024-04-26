import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1300px] mx-auto px-5 py-5'>
           
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;