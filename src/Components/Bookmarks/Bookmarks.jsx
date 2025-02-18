import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className='md:w-1/3'>
      <h2 className='bg-blue-100 border-blue-700 border text-center text-xl font-bold py-4 rounded-md text-blue-600 my-4'>Spent time on read: {readingTime} min</h2>
      <div className='bg-slate-200 p-5 rounded-md'>
        <h3 className='text-xl font-bold pl-2'>Bookmarked Blogs: {bookmarks.length}</h3>
        <div>
          {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          }
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;