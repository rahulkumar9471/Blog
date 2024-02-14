import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './blogComponents/Navbar';
import Home from './blogPages/Home';
import Design from './blogPages/Design';
import Development from './blogPages/Development';
import Footer from './blogComponents/Footer';
import Sidebar from './blogComponents/Sidebar';
import { useState } from 'react';
import Searchbar from './blogComponents/Searchbar';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const toggleSearchbar = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} toggleSearchbar={toggleSearchbar} isSearchOpen={isSearchOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
      </Routes>
      <Footer />
      <Searchbar toggleSearchbar={toggleSearchbar} isSearchOpen={isSearchOpen} />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default App;
