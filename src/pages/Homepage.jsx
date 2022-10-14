import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../contexts/ContextProvider';

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from '../components';


const Homepage = () => {

  const {
    setCurrentColor,
    setCurrentMode,
    activeMenu,
    currentMode,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useState();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="relative flex dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: '50%' }}
            className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
        </div>     
          {activeMenu ?( 
            <div className="fixed bg-white w-72 sidebar dark: bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          ):(
            <div className ="w-0 dark: bg-secondary-dark-bg">
              
            </div>
          )}
          <div className={
            activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
            : ' - main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }>

            <div className="fixed w-full md:static bg-main-bg dark: bg-main-dark-bg navbar">
            <Navbar />
            </div>
          </div>
            <Footer />
        </div>      
    </div>

  )
}

export default Homepage 