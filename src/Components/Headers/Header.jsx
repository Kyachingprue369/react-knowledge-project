import React from 'react';
import profile from '../../assets/images/profile.png'

const Header = () => {

  return (
    <div className='flex justify-between items-center w-11/12 my-5 border-b-2 pb-5 mx-auto'>
      <h3 className='text-4xl font-bold'>Knowledge Cafe </h3>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;