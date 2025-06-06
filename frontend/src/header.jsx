import React from 'react';

function Header() {
  return (
    <header className="w-full h-24 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] fixed top-0 z-50">
      <div className="container mx-auto h-full flex items-center px-4">
        {/* Logo */}
        <div className="flex-shrink-0 mr-8">
          <img 
            className="w-20 h-20" 
            src="/logoWithoutLabel.png" 
            alt="DOST Logo" 
          />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-sky-700 font-open-sans">
          DEPARTMENT OF SCIENCE AND TECHNOLOGY 1
        </h1>
      </div>
    </header>
  );
}

export default Header;