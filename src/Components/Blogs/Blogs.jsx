import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="md:w-2/3">
      <h3 className="text-3xl">Blogs: {blogs.length}</h3>
      <div>
        {
          blogs.map(blog => <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}>
          </Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;