import React from "react";
import { assets } from "../../assets/QuickBlog-Assets/assets";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

function BlogTableItems({ blog, fetchBlogs, index }) {
  const { title, createdAt } = blog;
  const blogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirm) return;

    try {
      const { data } = await axios.delete("/api/blog/delete", { id: blog._id });
      if (data.success) {
        toast.success("Blog deleted successfully");
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });
      if (data.success) {
        toast.success("Blog publish status updated successfully");
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error toggling publish status:", error);
      toast.error("Failed to toggle publish status");
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>

      <td className="px-2 py-4">{title}</td>

      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>

      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      <td className="px-2 py-4 flex text-xs gap-3">
        <button
          onClick={togglePublish}
          className="border px-2 py-0.5 mt-1 rounded cursor-pointer"
        >
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt="Cross icon"
          className="w-8 hover:scale-110 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
}

export default BlogTableItems;
