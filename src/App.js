import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './template/Home';
import Design from './template/Design';
import Development from './template/Development';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/design' element={<Design />} />
        <Route path='/development' element={<Development />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
