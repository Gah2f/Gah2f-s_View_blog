import React, { useEffect, useState } from "react";
import {
  assets,
  blog_data,
  dashboard_data,
} from "../../assets/QuickBlog-Assets/assets";
import BlogTableItems from "../../components/Admin/BlogTableItems";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

function Dashboard() {
  const [dashBoardData, setDashBoardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
  const { axios } = useAppContext();

  const fetchDashBoard = async () => {
    try {
      const { data } = await axios.get("/api/admin/dashboard");
      data.success ? setDashBoardData(data.dashBoardData) : toast.error(data.message);
    } catch (error) {
      console.log("Error fetching dashboard data:", error);
      toast.error("Failed to fetch dashboard data");
    }
  };

  useEffect(() => {
    fetchDashBoard();
  }, []);
  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            src={assets.dashboard_icon_1}
            alt="Blog count icon"
            className=""
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.blogs}
            </p>
            <p className="font-light text-gray-400 ">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            src={assets.dashboard_icon_2}
            alt="Comment count icon"
            className=""
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.comments}
            </p>
            <p className="font-light text-gray-400 ">Comments</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <img
            src={assets.dashboard_icon_3}
            alt="Draft count icon"
            className=""
          />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashBoardData.drafts}
            </p>
            <p className="font-light text-gray-400 ">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="Latest posts" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4 xl:px-6">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {dashBoardData.recentBlogs.map((blog, index) => (
                <BlogTableItems
                  key={blog_data._id}
                  blog={blog}
                  fetchBlogs={fetchDashBoard}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
