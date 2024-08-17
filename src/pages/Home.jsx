import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";
import { data } from "autoprefixer";

const Home = () => {
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
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="bg-[#0E1113] h-[100vh] px-24 py-6">
      <h1>Your blogs</h1>
      {blogs.map((blog) => (
        <ul>
          <li>{blog.title}</li>
          <li>{blog.author}</li>
          <li>{blog.content}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
