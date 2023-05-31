import React from 'react';
const Header = () => {
  return (
  <header className='py-8 ' >
    <div className='container mx-auto'  >
    <div className='flex justify-between item-center' >
      <a href='#' >
      <h1 className='text-gradient btn-link  text-2xl font-bold' >Constantino </h1>
      <h2 className='text-white  text-2xl font-bold' >Strada</h2>
      </a>
      <button  className='btn btn-sm' >
        Work with me
      </button>
    </div>
    </div>
  </header>
  )
};

export default Header;
