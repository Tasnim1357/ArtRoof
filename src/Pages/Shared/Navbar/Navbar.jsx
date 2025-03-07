import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ThemeContext } from '../../Root/Root';
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const{handleTheme,theme}=useContext(ThemeContext)


  const handleThemeToggle = () => {
    handleTheme(theme === 'dark' ? 'light' : 'dark');
  };
    const Navlinks=<>
       <li className='font-lato text-[#2D394B]  duration-500 hover:text-[#AF9F7B] font-base text-base dark:text-white'><Link to='/'>Home</Link></li>
       <li className='font-lato text-[#2D394B]  duration-500 hover:text-[#AF9F7B] font-base text-base dark:text-white'><Link to='/allarts'>ALL Arts & Craft Items</Link></li>
       <li className='font-lato text-[#2D394B]  duration-500 hover:text-[#AF9F7B] font-base text-base dark:text-white'><Link to='/arts'>Add Craft Item</Link></li>
       <li className='font-lato text-[#2D394B] duration-500 hover:text-[#AF9F7B] font-base text-base dark:text-white'><Link to={`/myarts/${user?.email}`}>My Art&Craft List</Link></li>
    </>
    const userSignOut=()=>{
      logOut()
      .then()
      .catch()
    }

  

    return (
        <div className="navbar bg-base-100 shadow-lg rounded-b-lg dark:bg-black">
        <div className="navbar-start z-50 w-[40%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dark:bg-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
        {Navlinks}
        <li>
         
        <label className="cursor-pointer grid place-items-center w-12">
  <input type="checkbox"  checked={theme === 'dark'} // Checked state based on the current theme
        onChange={handleThemeToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
 
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" ></path></svg>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</label>
          </li>
        <li className='mb-5'>
        {
            user && <div className="tooltip p-0 ml-2" data-tip={user.displayName}>
             <img src={user.photoURL} alt="" className='w-[60px] h-[60px] rounded-full border-2 p-1  border-yellow-600'/>
          </div>
            
          }

          

        </li>
        <li>
        {
          user ?  
          <Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-lg" onClick={userSignOut}>Logout</Link>
        : 
          <Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-lg">Login</Link>
      
        }
           </li>
           <li> <Link to='/register' className='btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-lg '>Register</Link></li>
            </ul>
          </div>
          <a className=" sm:text-3lg text-4xl font-semibold font-poppins text-[#2D394B] dark:text-white">Art<span className='text-[#AF9F7B]'>Roof</span></a>
        </div>
        <div className="navbar-center hidden lg:flex w-[67%]">
          <ul className="menu menu-horizontal px-1 dark:text-white">
          {Navlinks}
          <li>
        
        <label className="cursor-pointer grid place-items-center ">
  <input type="checkbox"  checked={theme === 'dark'} // Checked state based on the current theme
        onChange={handleThemeToggle} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
 
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" ></path></svg>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
</label>
          </li>
          
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex space-x-4">
          {
              user && <div className="dropdown dropdown-hover mr-4  dark:text-white">
            <img src={user.photoURL} alt="" className='w-[50px] h-[50px] rounded-full border-2 p-1 border-yellow-600'/>
              <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 dark:bg-black shadow bg-base-100 rounded-box w-52">
                <li><a>{user.displayName}</a></li>
                <li><Link to='/login' className="btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl" onClick={ userSignOut} >Logout</Link></li>
              
              </ul>
            </div>
              
            }
         

      {
          user ?  
          <Link to='/login' className='btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl hidden '>Login</Link>
        : 
        <Link to='/login' className='btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-xl '>Login</Link>
      
        }
       
        <Link to='/register' className='btn font-lato bg-[#AF9F7B] text-[#2D394B] duration-500 hover:text-[#AF9F7B] hover:bg-[#2D394B] font-base text-lg '>Register</Link>
         </div> 
         
       
      </div>
    );
};

export default Navbar;