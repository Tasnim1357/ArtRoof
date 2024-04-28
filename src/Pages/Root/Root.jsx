import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const ThemeContext=createContext(null)

const Root = () => {
    const [theme, setTheme] = useState(() => {
    
        return localStorage.getItem('theme') || 'light';
      });
    
      useEffect(() => {
        if (!localStorage.getItem('theme')) {
          // Only apply the preferred theme if no theme is stored in localStorage
          if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('theme', theme);
    
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [theme]);
    
      const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
    
      const contextValue = { handleTheme,theme };
    return (
        <div className='max-w-[1300px] mx-auto px-5 py-5 dark:bg-black'>
           
           <ThemeContext.Provider value={contextValue}>
           <Outlet></Outlet>
        </ThemeContext.Provider>
            
        </div>
    );
};

export default Root;