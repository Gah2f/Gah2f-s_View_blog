import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { images } from "../assets/images";
import { useAppContext } from "../Context/AppContext";

function Categories() {
  const [activeTab, setActiveTab] = useState("physics");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; 

  const {blogs, input} = useAppContext(); 

  const filteredBlogs = ()=>{
    if (input === '') {
      return blogs
    } 
    return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
  }

  return (
    <div className="mb-12">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        {["physics", "coding"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-6 font-medium text-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : ""
            }`}
          >
            {tab === "physics" ? "Physics Articles" : "Coding Guides"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs().filter((blog)=> (
          <CategoriesCard 
          key={blog._id}
          blog={blog}/>
        ))}
      </div>
    </div>
  );
}

export default Categories;
