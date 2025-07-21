import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/QuickBlog-Assets/assets";
import BlogCard from "./BlogCard";
import { useAppContext } from "../Context/AppContext";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const {blogs, input} = useAppContext();
  const filteredBlogs = ()=>{
    if (input === '') {
      return blogs
    } 
    return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((blog, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => setMenu(blog)}
              className='cursor-pointer text-gray-500'
            >
              {blog}
              {menu === blog && (
                <div className="absolute left-0 right-0 top-0 h-7 -z-1  border-b-4 border-b-primary "></div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
         {filteredBlogs().filter((blog)=> menu === 'All' ? true : blog.category === menu).map((blog)=> <BlogCard key={blog._id} blog={blog}  />)}
      </div>
    </div>
  );
}

export default BlogList;
