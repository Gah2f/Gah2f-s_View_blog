import React from "react";
import { assets } from "../../assets/QuickBlog-Assets/assets";
import { useAppContext } from "../../Context/AppContext.jsx";
import toast from "react-hot-toast";

function CommentTableItems({ comment, fetchComments }) {
  const { axios } = useAppContext();
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", { id: _id});
      if (data.success) {
        toast.success("Comment approved successfully");
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error approving comment:", error);
      toast.error("Failed to approve comment");
    }
  } 

  const deleteComment = async () => {
    try { 

      const confirm = window.confirm("Are you sure you want to delete this comment?");
      if (!confirm) return;
      const { data } = await axios.delete("/api/admin/delete-comment", { id: _id });
      if (data.success) {
        toast.success("Comment deleted successfully");
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error deleting comment:", error);
      toast.error("Failed to delete comment");
    }
  }
  return (
    <tr className="border-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td> 

      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td> 

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
            {!comment.isApproved ? 
        <img onClick={approveComment} src={assets.tick_icon} alt="Tick icon" className="w-5 hover:scale-110 transition-all cursor-pointer"/>    
        : <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1"> Approved </p>}
        <img onClick={deleteComment} src={assets.bin_icon} alt="Bin icon" className="w-5 hover:scale-110 transition-all cursor-pointer"
        />
        </div>
      </td>
    </tr>
  );
}

export default CommentTableItems;
