import React from 'react';
const Navigation: React.FC = () => {
  return (
    <nav className="px-4 py-[2rem] shadow-md">
      <div className="max-w-[95%] mx-auto flex flex-wrap justify-between items-center">
        {' '}
        <strong className="text-md lg:text-lg">Where in the world?</strong>
        <div className="cursor-pointer">
          <i className="fas fa-moon mr-2"></i>
          <span className="font-light">Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
