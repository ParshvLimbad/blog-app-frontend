import "./App.css";
import CreateBlog from "./pages/CreateBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import YourBlogs from "./pages/YourBlogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/your-blogs" element={<YourBlogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
