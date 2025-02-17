import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { cover_img, title, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='mr-12 my-5'>
      <img className='w-full h-[450px] rounded-xl' src={cover_img} alt="" />
      <div className='flex justify-between items-center py-3'>
        <div className='flex justify-center items-center gap-3'>
          <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
          <div className='py-2'>
            <h3 className='font-bold'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-2'>
          <p>{reading_time}</p>
          <p>Icon</p>
        </div>
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div>

      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;