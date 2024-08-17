import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://blog-app-backend-tawny.vercel.app/api/blogs",
        JSON.stringify({
          title: title,
          content: content,
          author: author,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      })
      .then(() => {
        setTitle("");
        setContent("");
        setAuthor("");
        navigate("/");
      });
  };

  return (
    <form
      onSubmit={handlePost}
      className="flex flex-col p-7 h-[100vh] items-center bg-[#0E1113] px-24 py-6"
    >
      <div className="flex flex-col w-[40rem] gap-4">
        <div className="flex flex-col w-full gap-2">
          <lable className="text-xl text-[#FFFFFF]">Title</lable>
          <input
            className="rounded-xl p-2 outline-none border hover:border-purple-400 focus:border-purple-400 ease-in-out duration-300 border-[#3E4142] border-1 bg-[#0E1113] text-[#FFFFFF]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <lable className="text-xl text-[#FFFFFF]">Content</lable>
          <textarea
            className="rounded-xl p-2 outline-none border hover:border-purple-400 focus:border-purple-400 ease-in-out duration-300 border-[#3E4142] border-1 h-[20rem] bg-[#0E1113] text-[#FFFFFF]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <lable className="text-xl text-[#FFFFFF]">Author</lable>
          <input
            className="rounded-xl p-2 outline-none border hover:border-purple-400 focus:border-purple-400 ease-in-out duration-300 border-[#3E4142] border-1 bg-[#0E1113] text-[#FFFFFF]"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className="rounded-xl p-2 bg-purple-400 hover:bg-purple-500 ease-in-out duration-300 text-white font-medium">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
