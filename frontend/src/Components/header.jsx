import { useState } from 'react';import React from 'react';

function Header() {
  return (
    <header className="w-full h-16 bg-white shadow fixed top-0 z-50">
      <div className="container mx-auto h-full flex items-center px-4">
        {/* Logo */}
        <div className="flex-shrink-0 mr-5 ml-3">
          <img 
            className="w-10 h-10" 
            src="/logoWithoutLabel.png" 
            alt="DOST Logo" 
          />
        </div>
        
        {/* Title */}
        <h1 className="text-xl font-bold text-sky-700 font-open-sans">
          DEPARTMENT OF SCIENCE AND TECHNOLOGY 1
        </h1>
      </div>
    </header>
  );
}

export default Header;
