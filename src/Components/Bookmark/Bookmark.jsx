import React from 'react';

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className='bg-white rounded-xl my-4 mx-2 p-3'>
      <h3>{title}</h3>
    </div>
  );
};

export default Bookmark;