import React from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { cover_img, title, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='mr-12 my-5 border-b-2 pb-8'>
      <img className='w-full h-[450px] rounded-xl object-cover' src={cover_img} alt="" />
      <div className='flex justify-between items-center py-3'>
        <div className='flex justify-center items-center gap-3'>
          <img className='w-12 h-12 rounded-full object-cover' src={author_img} alt="" />
          <div className='py-2'>
            <h3 className='font-bold'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-gray-500'>{reading_time} read</p>
          <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark className='hover:bg-blue-600' /></button>
        </div>
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='flex items-center py-4 gap-2'>
        {
          hashtags.map((hash, idx) => <p key={idx}>#{hash}</p>)
        }
      </div>
      <button onClick={() => handleMarkAsRead(reading_time)} className='text-blue-700 underline'>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;