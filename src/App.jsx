import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./blogComponents/Navbar";
import Home from "./blogPages/Home";
import Category from "./blogPages/Category";
import Footer from "./blogComponents/Footer";
import Sidebar from "./blogComponents/Sidebar";
import { useState } from "react";
import Searchbar from "./blogComponents/Searchbar";
import Blog from "./blogPages/Blog";
import ContactUs from "./Pages/ContactUs"; 
import SignIn from "./loginComponents/SignIn";
import SignUp from "./loginComponents/SignUp";
import ForgotPassword from "./loginComponents/ForgotPassword"; 
import NotFound from "./Pages/NotFound";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchbar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleSearchbar={toggleSearchbar}
        isSearchOpen={isSearchOpen}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ui-Ux-Design" element={<Category />} />
        <Route path="/Web-Development" element={<Category />} />
        <Route path="/Typography" element={<Category />} />
        <Route path="/Freelance-Business" element={<Category />} />
        <Route path="/Lifestyle" element={<Category />} />
        <Route path="/Startups" element={<Category />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact-us" element={<ContactUs />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Forgot-Password" element={<ForgotPassword />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
      <Searchbar
        toggleSearchbar={toggleSearchbar}
        isSearchOpen={isSearchOpen}
      />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default App;
