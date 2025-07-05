import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function LatestListCard({
  title,
  description,
  tags,
  views,
  comments,
  imgurl,
  darkMode,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className={`md:w-1/5 h-40 md:h-auto overflow-hidden`}>
        <img
          src={imgurl}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-5 md:w-4/5">
        <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag,index)=>(
                <span key={index} className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {tag}
                </span>
            ))}
        </div> 
        <h3 className="text-xl font-bold mb-2">
            {title}
        </h3> 
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            {description}
        </p> 

        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                    <VisibilityIcon className="mr-1"/> {views}
                </span> 

                <span className="flex items-center">
                    <CommentIcon className="mr-1"/> {comments}
                </span>
            </div> 

            <div className="flex space-x-2">
                <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
                    <ShareIcon/>
                </button>

                <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
                    <BookmarkIcon/>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LatestListCard;
