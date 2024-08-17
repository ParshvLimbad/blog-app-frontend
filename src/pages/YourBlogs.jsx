import axios from "axios";
import React, { useEffect, useState } from "react";

const YourBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  async function fetchData() {
    try {
      const res = await fetch(
        "https://blog-app-backend-tawny.vercel.app/api/blogs"
      );
      const data = await res.json();
      if (data.length > 0) {
        setBlogs(data);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://blog-app-backend-tawny.vercel.app/api/blogs/${id}`)
      .then((response) => {
        console.log("Resource deleted successfully:", response.data);
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting the resource:", error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-[100vh] px-24 py-6">
      <h1 className="font-medium text-2xl text-purple-400">Your blogs</h1>
      <div className="grid grid-cols-4 gap-3">
        {blogs.map((blog) => (
          <div
            className="flex flex-col p-2 border rounded-xl overflow-hidden h-[10rem]"
            key={blog.id}
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              {blog.title}
            </h3>
            <p>Written by: {blog.author}</p>
            <p>{blog.content}</p>
            {/* <button
              className="p-1 bg-red-500 rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBlogs;
