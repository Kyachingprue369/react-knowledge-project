import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className='md:w-1/3 bg-slate-200 p-5 rounded-sm'>
      <h3 className='text-xl font-bold pl-2'>BookMarked Blogs: {bookmarks.length}</h3>
      <div>
        {
          bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
      </div>
    </div>
  );
};

export default Bookmarks;