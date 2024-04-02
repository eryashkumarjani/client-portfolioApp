import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loader from './component/Loader';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MyResume from './pages/MyResume';
import ContactUs from './pages/ContactUs';
import './App.scss';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoader(false) }, 2900);
  }, [])
  return (
    <>
      {loader ? (<Loader />) : (<div className="App">
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutMe" element={<AboutUs />} />
            <Route path="/myResume" element={<MyResume />} />
            <Route path="/contactMe" element={<ContactUs />} />
          </Routes >
        </AnimatePresence >
        <Navbar />
      </div >)
      }
    </>
  );
}

export default App;
