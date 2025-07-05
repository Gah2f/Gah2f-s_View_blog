import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ArticleCard({
  title,
  excerpt,
  readingTime,
  date,
  author,
  imgurl,
  darkMode,
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imgurl}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">
            {title}
        </h3>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
            {excerpt}
        </p> 

        <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
               <AccessTimeIcon className="mr-1"/> 
               <span>{readingTime} min read</span>
            </div> 
            <span>{date}</span>
        </div> 
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium">{author}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
