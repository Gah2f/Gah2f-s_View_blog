import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  blog_data,
  comments_data,
} from "../assets/QuickBlog-Assets/assets.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer.jsx";
import Moment from "moment";
import Loader from "../components/Loader.jsx";
import { useAppContext } from "../Context/AppContext.jsx";
import toast from "react-hot-toast";

function Blog() {
  const { id } = useParams();
  const {axios} = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const data = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      console.log("Error fetching blog data:", error);
      toast.error("Failed to fetch blog data");
    }
  };

  const fetchComments = async () => {
   try {
    const {data} = await axios.get('/api/blog/comments', {blodId: id});
    if(data.success) {
      setComments(data.comments);
    } else {
      toast.error(data.message);
    }
   } catch (error) {
      console.log("Error fetching comments:", error);
      toast.error("Failed to fetch comments");
   }
  };

  const addComment = async (e) => {
    e.preventDefault(); 
   try {
     const {data} = await axios.post('/api/blog/add-comment', {blog: id, name, content});
     if(data.success) {
      toast.success("Comment added successfully");
       setName("");
       setContent("");
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     console.log("Error adding comment:", error);
     toast.error("Failed to add comment");
   }
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="Background"
        className="absolute -top-50 -z-1 opacity-50"
      />
      <Nav />
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary mt-2">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {data.title}
        </h1>

        <h2 className="my-5 max-w-lg truncate mx-auto">{data.subTitle}</h2>

        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          {" "}
          Author Name{" "}
        </p>
      </div>

      <div className="mx-5 max-w-auto md:mx-auto my-10 mt-6">
        <img
          src={data.image}
          alt="thumnail image"
          className="rounded-3xl mb-5"
        />
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="rich-text max-w-3xl mx-auto"
        ></div>

        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments( {comments.length})</p>

          <div className="flex flex-col gap-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="User Icon" className="w-6" />
                  <p className="font-medium">{comment.name}</p>
                </div>
                <p className="text-sm max-w-md ml-8">{comment.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(comment.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Comment"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            Share this article on social media
          </p> 

          <div className="flex">
            <img src={assets.facebook_icon} alt="Facebook Icon" width={50} />
            <img src={assets.twitter_icon} alt="Twitter Icon" width={50} />
            <img src={assets.googleplus_icon} alt="Google plus Icon" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
        <Loader/>
    </div>
  );
}

export default Blog;
